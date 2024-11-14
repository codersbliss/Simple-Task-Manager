import React, { useState, useEffect } from 'react';
import { filterTasksByStatus, clearTrash, permanentDeleteTask } from '../utils/storage';
import TaskList from './TaskList';

const Trash = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(-1));
    };

    useEffect(() => {
        refreshTasks();
    }, []);


    const handleClearTrash = () => {
        if (window.confirm("Are you sure you want to empty the trash? This action cannot be undone.")) {
            clearTrash();
            refreshTasks();
        }
    };

    const deleteTask = (taskId) => {
        if (window.confirm("Are you sure you want to delete this Task? This action cannot be undone.")) {
            permanentDeleteTask(taskId);
            refreshTasks();
        }
    };

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-10 flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Trash Items</h2>
                <button
                    onClick={handleClearTrash}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
                >
                    Clear All
                </button>
            </div>
            <TaskList
                refreshTasks={refreshTasks}
                tasks={tasks}
                permanentDeleteTask={deleteTask} />
        </div>

    );
};

export default Trash;
