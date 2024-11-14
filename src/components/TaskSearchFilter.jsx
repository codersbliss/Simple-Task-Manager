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

    const refreshTasks = () =>{
        setTasks(getTasks());
    }

    // Filter tasks based on search criteria
    useEffect(() => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const filtered = tasks.filter(task => {
            const matchesSearch = !searchTerm || task.title.toLowerCase().includes(lowerSearchTerm) || task.description.toLowerCase().includes(lowerSearchTerm);
            const matchesPriority = !priorityFilter || Number(task.priority) === parseInt(priorityFilter);
            const matchesStatus = statusFilter === '' || Number(task.status) === parseInt(statusFilter);
            return matchesSearch && matchesPriority && matchesStatus;
        });
        setFilteredTasks(filtered);
    }, [searchTerm, priorityFilter, statusFilter, tasks]);

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] mx-4 overflow-y-auto relative text-black">
                
                {/* Close button in the top right corner */}
                <button
                    onClick={() => setIsFilterOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400"
                >
                    <span className="text-2xl font-bold">&times;</span>
                </button>

                <h2 className="text-3xl font-semibold mb-6 text-center text-green-300">Search Task</h2>

                {/* Search input */}
                <input
                    type="text"
                    placeholder="Search by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full border border-yellow-400 rounded-lg px-4 py-3 mb-5 text-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
                />

                {/* Priority filter dropdown */}
                <select
                    value={priorityFilter}
                    onChange={(e) => setPriorityFilter(e.target.value)}
                    className="w-full border border-yellow-400 rounded-lg px-4 py-3 mb-5 text-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
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
                    className="w-full border border-yellow-400 rounded-lg px-4 py-3 mb-5 text-gray-800 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-300"
                >
                    <option value="">All Statuses ❓</option>
                    <option value="0">Pending ⏰</option>
                    <option value="1">Completed ✅</option>
                    <option value="-1">Trashed 🚮</option>
                </select>

                {/* Filtered Task Results */}
                <div className="mt-6 border-t border-yellow-500 pt-5">
                    {filteredTasks.length > 0 ? (
                        <TaskList tasks={filteredTasks} refreshTasks={refreshTasks}/>
                    ) : (
                        <p className="text-gray-300 text-center">No tasks match your search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskSearchFilter;
