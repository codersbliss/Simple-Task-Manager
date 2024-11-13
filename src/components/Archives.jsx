import React, { useState, useEffect } from 'react';
import TaskList from './TaskList'; // Assuming TaskList renders a list of tasks
import { getTasks } from '../utils/storage'; // Retrieves all tasks

const Archives = () => {
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        // Fetch all tasks and filter to include only archived ones
        const tasks = getTasks();
        const archived = tasks.filter(task => task.status === 1); // Assuming 1 status is used for archived tasks
        setArchivedTasks(archived);
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-6">
            {archivedTasks.length > 0 ? (
                <TaskList tasks={archivedTasks} />
            ) : (
                <p className="text-gray-500 text-center">No archived tasks available.</p>
            )}
        </div>
    );
};

export default Archives;
