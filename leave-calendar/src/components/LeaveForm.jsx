import React, { useState } from 'react';

const initialState = {
    title: '',
    type: 'Planned',
    start: '',
    end: '',
};

export default function LeaveForm({ onSubmit, leaveToEdit }) {
    const [form, setForm] = useState(initialState);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = e => {
        e.preventDefault();
        if (!form.title || !form.start || !form.end) return;
        onSubmit({
            ...form,
            start: new Date(form.start),
            end: new Date(form.end),
            id: leaveToEdit?.id || null,
        });
        setForm(initialState);
    };

    return (
        <form onSubmit={submit} className="flex flex-wrap gap-2 items-center mb-4">
            <input name="title" placeholder="User Name" value={form.title} onChange={handleChange} className="border p-2" />
            <select name="type" value={form.type} onChange={handleChange} className="border p-2">
                <option value="Planned">Planned</option>
                <option value="Sick">Sick</option>
                <option value="WFH">WFH</option>
                <option value="Other">Other</option>
            </select>
            <input type="date" name="start" value={form.start} onChange={handleChange} className="border p-2" />
            <input type="date" name="end" value={form.end} onChange={handleChange} className="border p-2" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </form>
    );
}
