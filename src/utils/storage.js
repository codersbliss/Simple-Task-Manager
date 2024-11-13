export const getTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];
export const saveTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));

const dummyTask = {
    title: "Sample Task",
    description: "This is a test task for today's plan.",
    dueDate: new Date().toISOString().split('T')[0], // today's date
    priority: 1,
    status : 0,
};
let tasks = [];
tasks.push(dummyTask);
localStorage.setItem('tasks', JSON.stringify(tasks));