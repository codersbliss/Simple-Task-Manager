import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const TodayTasks = ({ todayTasks }) => {
    return (
        <>
            {todayTasks.length > 0 ? (
                todayTasks
                    .filter(task => task.status === 0)
                    .sort((task1, task2) => Number(task1.priority) - Number(task2.priority))
                    .map((task, index) => (
                        <div key={index} className="p-4 bg-white border rounded-xl text-gray-800 space-y-2 mb-4 shadow-md">
                            <div className="flex justify-between items-center">
                                <div className="text-gray-400 text-xs">{task.title}</div>
                                <div className="text-gray-400 text-xs">{new Date(task.dueDate).toDateString()}</div>
                            </div>

                            <a href="#" className="font-bold text-lg hover:text-yellow-800 hover:underline">
                                {task.description}
                            </a>

                            <div className="flex justify-between items-center text-sm">
                                <div className="flex items-center space-x-1">
                                    {task.priority === '1' && (
                                        <span className="text-red-500 font-bold">High Priority</span>
                                    )}
                                    {task.priority === '2' && (
                                        <span className="text-orange-500 font-bold">Medium Priority</span>
                                    )}
                                    {task.priority === '3' && (
                                        <span className="text-green-500 font-bold">Low Priority</span>
                                    )}
                                </div>

                                <div className="text-gray-600">
                                    {task.priority === 'High' && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-red-500 inline align-middle mr-1" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    )}
                                    Deadline is today
                                </div>
                            </div>

                            <div className="text-gray-500 text-xs">
                                Added {formatDistanceToNow(task.lastUpdate, { addSuffix: true })}
                            </div>

                        </div>
                    ))
            ) : (
                <p>No tasks for today!</p>
            )}
        </>
    );
};

export default TodayTasks;
