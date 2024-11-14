import React, { useState } from 'react';

const TaskModal = ({ task, onSave, onClose }) => {
    const [updatedTask, setUpdatedTask] = useState({
        ...task,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
        dueTime: task.dueDate
            ? new Date(task.dueDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
            : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedTask(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        if (!updatedTask.dueDate || !updatedTask.dueTime) {
            alert('Time & Date is Mandatory!!!');
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70 z-50">
            <div className="bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500 p-1 rounded-lg shadow-lg w-full max-w-lg mx-4">
                <div className="bg-green-400 p-6 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center border-b-2 pb-4">Track Task</h2>

                    {/* Task Title */}
                    <input
                        type="text"
                        name="title"
                        value={updatedTask.title}
                        onChange={handleChange}
                        placeholder="Task Title"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Task Description */}
                    <textarea
                        name="description"
                        value={updatedTask.description}
                        onChange={handleChange}
                        placeholder="Task Description"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows="3"
                    />

                    {/* Due Date */}
                    <input
                        type="date"
                        name="dueDate"
                        value={updatedTask.dueDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Due Time */}
                    <input
                        type="time"
                        name="dueTime"
                        value={updatedTask.dueTime}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {/* Priority Selection */}
                    <select
                        name="priority"
                        value={updatedTask.priority}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>

                    {/* Status Selection */}
                    <select
                        name="status"
                        value={updatedTask.status}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="0">UnDone</option>
                        <option value="1">Completed</option>
                        <option value="-1">Trash</option>
                    </select>

                    {/* Buttons */}
                    <div className="flex justify-between">
                        <button
                            onClick={handleSave}
                            className="flex-1 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg mr-2 hover:bg-blue-600 transition duration-200"
                        >
                            Save
                        </button>
                        <button
                            onClick={onClose}
                            className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-400 transition duration-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskModal;
