import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../utils/storage';

const ThisWeekTasks = () => {
    const [weeklyTasks, setWeeklyTasks] = useState([]);

    useEffect(() => {
        const tasks = getTasks();
        const now = new Date();

        // Calculate start and end dates of the current week
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // End of week (Saturday)

        const filteredTasks = tasks.filter(task => {
            const taskDueDate = new Date(task.dueDate);
            return taskDueDate >= startOfWeek && taskDueDate <= endOfWeek;
        });

        setWeeklyTasks(filteredTasks);
    }, []);

    return (
        <div className="p-8 m-auto max-w-4xl h-screen bg-yellow-50 mt-6">
            {weeklyTasks.length > 0 ? (
                <TaskList tasks={weeklyTasks} />
            ) : (
                <p className="text-gray-500">No tasks due this week.</p>
            )}
        </div>
    );
};

export default ThisWeekTasks;
