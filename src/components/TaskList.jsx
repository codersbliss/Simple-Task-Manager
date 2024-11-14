import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskModal from './TaskModal';
import { updateTask, moveToTrash } from '../utils/storage';

const TaskList = ({ tasks, refreshTasks, permanentDeleteTask }) => {
    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Handle task deletion
    const handleDelete = (taskId) => {
        moveToTrash(taskId);
        refreshTasks();
    };

    // Handle task edit button click
    const handleEdit = (task) => {
        setSelectedTask(task);
        setIsModalOpen(true);
    };

    // Handle task save after modal close
    const handleSave = (updatedTask) => {
        updateTask(updatedTask);
        refreshTasks();
    };

    // Handle modal close
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-4 bg-gray-50 rounded-lg border border-gray-200 shadow-inner">
            {tasks && tasks.length > 0 ? tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onDelete={permanentDeleteTask || handleDelete}
                    onEdit={handleEdit}
                />
            )) : (
                <p className="text-gray-500 text-center">No tasks found!</p>
            )}

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
