import React, { useState, useEffect } from 'react';
import { getTasks } from '../utils/storage';
import TaskList from './TaskList';

const TaskSearchFilter = ({ setIsFilterOpen }) => {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    // Filter tasks based on search criteria
    useEffect(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = tasks.filter(task => {
            const matchesSearch = !searchTerm || task.title.toLowerCase().includes(lowerSearchTerm) || task.description.toLowerCase().includes(lowerSearchTerm);
            const matchesPriority = !priorityFilter || task.priority === parseInt(priorityFilter);
            const matchesStatus = statusFilter === '' || task.status === parseInt(statusFilter);
            return matchesSearch && matchesPriority && matchesStatus;
        });
        setFilteredTasks(filtered);
    }, [searchTerm, priorityFilter, statusFilter, tasks]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-indigo-400 p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] mx-4 overflow-y-auto relative">

                {/* Close button in the top right corner */}
                <button
                    onClick={() => setIsFilterOpen(false)}
                    className="absolute top-4 right-4 text-gray-300 hover:text-white"
                >
                    <span className="text-2xl font-bold">&times;</span>
                </button>

                <h2 className="text-3xl font-semibold text-center mb-6 text-black">Search Tasks</h2>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Priority filter dropdown */}
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Priorities</option>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                </select>

                {/* Status filter dropdown */}
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full border border-gray-600 bg-gray-700 text-white rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">All Statuses</option>
                    <option value="0">Overdue</option>
                    <option value="1">Completed</option>
                    <option value="-1">Trashed</option>
                </select>

                {/* Filtered Task Results */}
                <div className="mt-6 mb-4 border-t border-gray-600 pt-4">
                    {filteredTasks.length > 0 ? (
                        <TaskList tasks={filteredTasks} />
                    ) : (
                        <p className="text-gray-400 text-center">No tasks match your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskSearchFilter;
