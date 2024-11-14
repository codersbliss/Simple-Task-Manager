import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../utils/storage';

const Archives = () => {
    const [archivedTasks, setArchivedTasks] = useState([]);

    const refreshTasks = () => {
        const tasks = getTasks();
        const archived = tasks.filter(task => Number(task.status) === 1);
        setArchivedTasks(archived);
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Archived Tasks</h2>
            <div className="overflow-y-auto max-h-[75vh] bg-white p-6 rounded-lg shadow-inner border border-gray-300">
                {archivedTasks.length > 0 ? (
                    <TaskList tasks={archivedTasks} refreshTasks={refreshTasks} />
                ) : (
                    <p className="text-center text-gray-500">No archived tasks available.</p>
                )}
            </div>
        </div>
    );
};

export default Archives;
