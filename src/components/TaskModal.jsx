import React, { useState } from 'react';

const TaskModal = ({ task, onSave, onClose }) => {
    const [updatedTask, setUpdatedTask] = useState({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
        dueTime: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[1].slice(0, 5) : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!updatedTask.dueDate || !updatedTask.dueTime) {
            alert('Time & Date is Mandatory!');
            return;
        }
        const fullDueDate = `${updatedTask.dueDate}T${updatedTask.dueTime}:00`;

        const taskToSave = {
            ...updatedTask,
            dueDate: new Date(fullDueDate).toISOString(),
            lastUpdate: new Date().toISOString(),
        };
        onSave(taskToSave);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-green-300 p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
                <h2 className="text-2xl font-semibold mb-5 text-gray-700 text-center">Create Task</h2>

                <input
                    type="text"
                    name="title"
                    value={updatedTask.title}
                    onChange={handleChange}
                    placeholder="Task Title"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                />

                <textarea
                    name="description"
                    value={updatedTask.description}
                    onChange={handleChange}
                    placeholder="Task Description"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                    rows="4"
                />

                <div className="flex space-x-4 mb-4">
                    <input
                        type="date"
                        name="dueDate"
                        value={updatedTask.dueDate}
                        onChange={handleChange}
                        className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                    />
                    <input
                        type="time"
                        name="dueTime"
                        value={updatedTask.dueTime}
                        onChange={handleChange}
                        className="w-1/2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                    />
                </div>

                <select
                    name="priority"
                    value={updatedTask.priority}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 text-gray-700"
                >
                    <option value="1">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="3">Low Priority</option>
                </select>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                    >
                        Save
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
