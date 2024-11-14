import React, { useState, useEffect } from 'react';
import { getTasksByDueDate } from '../utils/storage';
import TaskList from './TaskList';

const UpcomingTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getTasksByDueDate(false));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upcoming Tasks</h2>
            <div className="overflow-y-auto max-h-[75vh] bg-white p-6 rounded-lg shadow-inner border border-gray-200">
                {tasks.length > 0 ? (
                    <TaskList tasks={tasks} refreshTasks={refreshTasks} />
                ) : (
                    <p className="text-center text-gray-500">No upcoming tasks found.</p>
                )}
            </div>
        </div>
    );
};

export default UpcomingTasks;
