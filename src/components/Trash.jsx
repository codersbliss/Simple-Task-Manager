import React, { useState, useEffect } from 'react';
import { filterTasksByStatus, clearTrash } from '../utils/storage';
import TaskCard from './TaskCard';

const Trash = () => {
    const [tasks, setTasks] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched) {
            setTasks(filterTasksByStatus(-1));
            setFetched(true);
        }
        console.log(tasks);
    }, [tasks]);


    const handleClearTrash = () => {
        if (window.confirm("Are you sure you want to empty the trash? This action cannot be undone.")) {
            clearTrash();
            setTasks([]);
        }
    };

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-10">
            {fetched && tasks.map(task => <TaskCard key={task.id} task={task} isTrash={true} onDelete={handleClearTrash} />)}
        </div>
    );
};

export default Trash;
