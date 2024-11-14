import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TaskCard = ({ task, onDelete, onEdit }) => {
    const isOverdue = task.dueDate < new Date().toISOString();
    const dueDateClass = isOverdue ? "text-red-600 font-bold" : "text-yellow-600 font-semibold";
    const priorityClass = task.priority === "1" ? "bg-red-100 text-red-600" : 
                          task.priority === "2" ? "bg-orange-100 text-orange-600" : 
                          "bg-green-100 text-green-600";

    return (
        <div className="bg-violet-400 p-5 rounded-lg shadow-lg border border-black hover:shadow-2xl transition duration-200 ease-in-out m-3">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-black">{task.title}</h3>
                <span className={`text-xs ${dueDateClass}`}>
                    {isOverdue ? "Overdue" : "Due Soon"}
                </span>
            </div>

            <p className="text-sm text-black-600 mb-3">{task.description}</p>

            <div className="flex justify-between items-center mt-3">
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${priorityClass}`}>
                    {task.priority === "1" && "High Priority"}
                    {task.priority === "2" && "Medium Priority"}
                    {task.priority === "3" && "Low Priority"}
                </div>

                <span className="text-xs text-black-500">
                    {task.dueDate && `Due ${formatDistanceToNow(new Date(task.dueDate), { addSuffix: true })}`}
                </span>
            </div>

            <div className="flex justify-end space-x-3 mt-4">
                <button
                    onClick={() => onEdit(task)}
                    className="w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 flex items-center justify-center"
                    title="Edit Task"
                >
                    ✏️
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 flex items-center justify-center"
                    title="Delete Task"
                >
                    🗑️
                </button>
            </div>
        </div>
    );
};

export default TaskCard;
