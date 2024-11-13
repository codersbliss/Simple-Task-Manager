import React, { useState, useEffect } from 'react';
import { filterTasksByStatus } from '../utils/storage';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks(filterTasksByStatus(1)); // 1 for completed
    }, []);

    return (
        <div>
            <h2>Completed Tasks</h2>
            {tasks.length ? tasks.map(task => (
                <TaskCard key={task.id} task={task} />
            )) : <p>No completed tasks</p>}
        </div>
    );
};
export default CompletedTasks;
