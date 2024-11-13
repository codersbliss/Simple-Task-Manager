import React, { useState, useEffect } from 'react';
import { getTasksByDueDate, addTask } from '../utils/storage';
import TaskCard from './TaskCard';
import TaskList from './TaskList';

const UpcomingTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (!fetched) {
            setTasks(getTasksByDueDate(false));
            setFetched(true);
        }
        console.log(tasks);
    }, [tasks]);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50">
            {fetched && <TaskList tasks={tasks} />}
        </div>
    );
};
export default UpcomingTasks;
