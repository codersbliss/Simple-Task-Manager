import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TaskCard = ({ task, onDelete, onEdit, isTrash = false }) => {
    const overdueClass = task.dueDate < new Date().toISOString() ? "text-red-500 font-semibold" : "text-yellow-600";

    return (
        <div className="bg-green-300 p-6 rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition m-2">
            <div className="flex justify-between items-center mb-2">
                <div className="text-xl font-semibold text-gray-700">{task.title}</div>
                <div className={`text-xs ${overdueClass}`}>
                    {task.dueDate < new Date().toISOString() ? "Overdue" : "Due Soon"}
                </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{task.description}</p>

            <div className="flex justify-between items-center">
                {/* Priority Indicator */}
                <div className="flex items-center space-x-2">
                    {task.priority === "1" && <span className="text-red-500 font-semibold">High Priority</span>}
                    {task.priority === "2" && <span className="text-orange-500 font-semibold">Medium Priority</span>}
                    {task.priority === "3" && <span className="text-green-500 font-semibold">Low Priority</span>}
                </div>

                {/* Due Date */}
                <div className="text-xs text-gray-500">
                    {task.dueDate && `Due ${formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}`}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 flex space-x-3">
                {!isTrash && (
                    <button
                        onClick={() => onEdit(task)}
                        className="w-16 h-8 bg-indigo-500 text-white rounded hover:bg-indigo-600 flex items-center justify-center transition duration-200"
                    >
                        ✏️
                    </button>
                )}
                <button
                    onClick={() => onDelete(task.id)}
                    className="w-16 h-8 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center transition duration-200"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
