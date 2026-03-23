import React, { useEffect, useState } from 'react';
import LeaveForm from './components/LeaveForm';
import CalendarView from './components/CalendarView';
import LeaveList from './components/LeaveList';
import { loadLeaves, saveLeaves } from './utils/storage';

function App() {
    const [leaves, setLeaves] = useState([]);
    const [filterUser, setFilterUser] = useState('');

    useEffect(() => {
        setLeaves(loadLeaves());
    }, []);

    useEffect(() => {
        saveLeaves(leaves);
    }, [leaves]);

    const addOrUpdateLeave = (leave) => {
        setLeaves(prev =>
            leave.id
                ? prev.map(l => (l.id === leave.id ? leave : l))
                : [...prev, { ...leave, id: Date.now() }]
        );
    };

    const deleteLeave = (id) => {
        setLeaves(prev => prev.filter(l => l.id !== id));
    };

    const filteredLeaves = filterUser
        ? leaves.filter(l => l.title === filterUser)
        : leaves;

    const uniqueUsers = [...new Set(leaves.map(l => l.title))];

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Leave Calendar</h1>
            {/*<LeaveForm onSubmit={addOrUpdateLeave} />*/}
            <div className="my-4">
                <label className="mr-2">Filter by User:</label>
                <select onChange={e => setFilterUser(e.target.value)} className="border p-2 rounded">
                    <option value="">All</option>
                    {uniqueUsers.map(user => (
                        <option key={user} value={user}>{user}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-row gap-4">
                <CalendarView events={filteredLeaves} onAddLeave={addOrUpdateLeave} />
            <LeaveList leaves={filteredLeaves} onEdit={addOrUpdateLeave} onDelete={deleteLeave} />
            </div>
        </div>
    );
}

export default App;
