import React, { useEffect, useState } from 'react';
import { getTasks, addTask } from '../utils/storage';
import TaskModal from './TaskModal';
import TodayTasks from './TodayTasks';
import TaskSearchFilter from './TaskSearchFilter';

const TodayPlan = () => {
    const today = new Date();
    const [todayTasks, setTodayTasks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [tasksFinished, setTasksFinished] = useState(0);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const refreshTasks = () => {
        const tasks = getTasks();
        setTasksFinished(tasks.filter(task => Number(task.status) === 1).length);
        setTodayTasks(tasks.filter(task => {
            return new Date(task.dueDate).toDateString() === new Date().toDateString() && Number(task.status) === 0;
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
        <main className="pt-16 max-h-screen overflow-auto bg-white">
            <div className="px-6 py-8 max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md mb-8">
                    <h1 className="text-3xl font-bold">Hello prateek 👋</h1>
                    <p className="text-sm mt-2">Welcome back! Here’s your plan for today</p>
                    <div className="flex justify-between items-center mt-6">
                        <div>
                            <button
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                                className="bg-black text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
                                Search Task
                            </button>
                            {isFilterOpen && <TaskSearchFilter setIsFilterOpen={setIsFilterOpen} />}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-violet-600 p-6 rounded-lg text-center">
                        <p className="text-lg font-semibold text-black-800">Tasks Finished</p>
                        <p className="text-4xl font-bold text-black-700">{tasksFinished}</p>
                    </div>
                    <div className="bg-indigo-600 p-6 rounded-lg text-center">
                        <p className="text-lg font-semibold text-black-800">Today's Total Plan</p>
                        <p className="text-xl font-semibold text-black-700">{todayTasks.length} completed</p>
                    </div>
                </div>

                {/* Task Section */}
                <div className="bg-green-400 p-8 rounded-lg shadow-md">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-blue-700">Your Tasks Today</h2>
                        <button
                            onClick={toggleModal}
                            className="bg-blue-600 text-black px-4 py-2 rounded-lg shadow hover:bg-white">
                            + Add Task
                        </button>
                    </div>
                    <TodayTasks todayTasks={todayTasks} refreshTasks={refreshTasks} />
                    {showModal && (
                        <TaskModal
                            task={{ title: '', description: '', dueDate: today, priority: '2', status: 0 }}
                            onSave={handleSaveTask}
                            onClose={toggleModal}
                        />
                    )}
                </div>
            </div>
        </main>
    );
};

export default TodayPlan;
