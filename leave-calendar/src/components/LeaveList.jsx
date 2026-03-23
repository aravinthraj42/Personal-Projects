import React from 'react';

export default function LeaveList({ leaves, onEdit, onDelete }) {
    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Leave Entries</h2>
            <table className="w-full border text-sm">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-2 py-1">User</th>
                    <th className="border px-2 py-1">Type</th>
                    <th className="border px-2 py-1">Start</th>
                    <th className="border px-2 py-1">End</th>
                    <th className="border px-2 py-1">Actions</th>
                </tr>
                </thead>
                <tbody>
                {leaves.map((leave) => (
                    <tr key={leave.id}>
                        <td className="border px-2 py-1">{leave.title}</td>
                        <td className="border px-2 py-1">{leave.type}</td>
                        <td className="border px-2 py-1">{new Date(leave.start).toLocaleDateString()}</td>
                        <td className="border px-2 py-1">{new Date(leave.end).toLocaleDateString()}</td>
                        <td className="border px-2 py-1 space-x-2">
                            <button onClick={() => onEdit(leave)} className="bg-yellow-400 px-2 py-1 text-white rounded">Edit</button>
                            <button onClick={() => onDelete(leave.id)} className="bg-red-500 px-2 py-1 text-white rounded">Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
