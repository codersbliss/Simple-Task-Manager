import React, { useState, useEffect } from 'react';
import { filterTasksByStatus } from '../utils/storage';
import TaskList from './TaskList';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);

    const refreshTasks = () => {
        setTasks(filterTasksByStatus(1));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50">
            <TaskList tasks={tasks} refreshTasks={refreshTasks}/>
        </div>
    );
};
export default CompletedTasks;
