import React, { useState, useEffect } from 'react';
import { getOverdueTasks } from '../utils/storage';
import TaskList from './TaskList';

const OverdueTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [fetched, setFetched] = useState(false);
    useEffect(() => {
        if(!fetched){
            setTasks(getOverdueTasks());
            setFetched(true);
        }
        console.log(tasks);
    }, [tasks]);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overdue Tasks</h2>
            {fetched && <TaskList tasks={tasks} />}
        </div>
    );
};

export default OverdueTasks;
