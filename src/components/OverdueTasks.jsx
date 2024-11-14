import React, { useState, useEffect } from 'react';
import { getOverdueTasks } from '../utils/storage';
import TaskList from './TaskList';

const OverdueTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(getOverdueTasks());
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overdue Tasks</h2>
            <TaskList tasks={tasks} refreshTasks={refreshTasks} />
        </div>
    );
};

export default OverdueTasks;
