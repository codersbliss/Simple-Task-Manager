import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { updateTask, moveToTrash } from '../utils/storage';

const TaskList = ({ tasks }) => {
    const [taskList, setTaskList] = useState(tasks);
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle task deletion
    const handleDelete = (taskId) => {
        moveToTrash(taskId);
        setTaskList(taskList.filter(task => task.id !== taskId));
    };

    // Handle task edit button click
    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    // Handle task save after modal close
    const handleSave = (updatedTask) => {
        updateTask(updatedTask);
        setTaskList(taskList.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {taskList.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}

            {isModalOpen && (
                <TaskModal
                    task={selectedTask}
                    onSave={handleSave}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export default TaskList;
