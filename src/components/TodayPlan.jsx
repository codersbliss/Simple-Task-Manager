import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '../utils/storage';
import TaskModal from './TaskModal';
import TodayTasks from './TodayTasks';
import TaskSearchFilter from './TaskSearchFilter';

const TodayPlan = () => {
    const [todayTasks, setTodayTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const today = new Date().toISOString().split('T')[0];
    const [tasksFinished, setTasksFinished] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const refreshTasks = () => {
        const tasks = getTasks();
        setTasksFinished(tasks.filter(task => task.status === 1).length);
        setTodayTasks(tasks.filter(task => {
            const taskDueDate = task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '';
            return taskDueDate === today && task.status === 0;
        }));
    };

    useEffect(() => {
        refreshTasks();
    }, []);

    const toggleModal = () => setShowModal(!showModal);

    const handleSaveTask = (newTask) => {
        addTask(newTask);
        refreshTasks();
    };

    return (
        <main className="pt-20 bg-gray-600 min-h-screen text-gray-800">
            <div className="px-8 py-10">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-lg p-10 shadow-md border border-gray-900">
                        <h1 className="text-3xl font-bold mb-8 text-blue-900">Welcome back, Prateek 👋</h1>
                        
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center space-x-4">
                                {/* Archive Button */}
                            </div>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                                    className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                                >
                                    Find Tasks
                                </button>
                                {isFilterOpen && <TaskSearchFilter setIsFilterOpen={setIsFilterOpen} />}
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="p-5 bg-gray-100 rounded-lg shadow border border-gray-300">
                                <h2 className="text-lg font-semibold text-gray-700 mb-1">Daily Plan</h2>
                                <p className="text-lg text-gray-600">
                                    {todayTasks.filter(task => task.status === 1).length} of {todayTasks.length} tasks completed
                                </p>
                                <button
                                    onClick={toggleModal}
                                    className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                                >
                                    Start New Task
                                </button>
                            </div>
                            <div className="p-5 bg-gray-100 rounded-lg shadow border border-gray-300">
                                <h2 className="text-lg font-semibold text-gray-700 mb-1">Today's Tasks Completed</h2>
                                <p className="text-3xl font-bold text-blue-600">{tasksFinished}</p>
                            </div>
                            {/* <div className="p-5 bg-gray-100 rounded-lg shadow border border-gray-300">
                                <h2 className="text-lg font-semibold text-gray-700 mb-1">Tracked Hours</h2>
                                <p className="text-3xl font-bold text-blue-600">5.5</p>
                            </div> */}
                        </div>

                        <div className="bg-gray-100 rounded-lg p-6 shadow border border-gray-300">
                            <h2 className="text-2xl font-bold text-blue-600 mb-4">Today's Tasks</h2>
                            <div className="space-y-4">
                                <TodayTasks todayTasks={todayTasks} />
                                {showModal && (
                                    <TaskModal
                                        task={{ title: '', description: '', dueDate: today, priority: '2', status: 0 }}
                                        onSave={handleSaveTask}
                                        onClose={toggleModal}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default TodayPlan;
