import React, { useEffect, useState } from 'react';
import Task from './Task';

const MainContent = () => {
  // State for tasks and filters
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [search, setSearch] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterStatus, setFilterStatus] = useState('all'); // 'all', 'completed', 'incomplete'

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load tasks from LocalStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to LocalStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Handle task creation
  const addTask = () => {
    if (title && description && dueDate) {
      const newTask = {
        id: Date.now(),
        title,
        description,
        dueDate,
        priority,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTitle('');
      setDescription('');
      setDueDate('');
      setIsModalOpen(false); // Close modal after adding the task
    }
  };

  // Handle task deletion
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Handle task update (changing priority or completion status)
  const updateTask = (taskId, newPriority) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, priority: newPriority } : task
    ));
  };

  // Filter tasks based on search and status
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    const matchesPriority = filterPriority ? task.priority === filterPriority : true;
    const matchesStatus = filterStatus === 'all' ? true : filterStatus === 'completed' ? task.completed : !task.completed;

    return matchesSearch && matchesPriority && matchesStatus;
  });

  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-3xl">
        <h1 className="text-3xl font-bold mb-8">Task Management</h1>

        {/* Task Filters and Search */}
        <div className="mb-8">
          <input
            type="text"
            className="p-2 border rounded-md w-full"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="mt-4">
            <label>Filter by Priority:</label>
            <select
              className="p-2 ml-2 border rounded-md"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="">All</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
          <div className="mt-4">
            <label>Filter by Status:</label>
            <select
              className="p-2 ml-2 border rounded-md"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </div>

        {/* Add Task Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Task
        </button>

        {/* Modal for Adding Task */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white p-6 rounded-lg w-96">
              <h2 className="text-2xl font-bold mb-4">Add Task</h2>
              <input
                type="text"
                className="p-2 border rounded-md w-full mb-4"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <textarea
                className="p-2 border rounded-md w-full mb-4"
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <input
                type="date"
                className="p-2 border rounded-md mb-4"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <select
                className="p-2 border rounded-md mb-4"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <div className="flex gap-2">
                <button
                  onClick={addTask}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Add Task
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Display Tasks */}
        <div className="space-y-4 mt-8">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MainContent;
