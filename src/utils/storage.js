// Retrieves tasks from localStorage, returns an empty array if there are no tasks
export const getTasks = () => {
    try {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        return tasks || [];
    } catch (error) {
        console.error("Error retrieving tasks from localStorage:", error);
        return [];
    }
};

// Saves tasks to localStorage
export const saveTasks = (tasks) => {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks to localStorage:", error);
    }
};

// Adds a new task to the task list
export const addTask = (task) => {
    const tasks = getTasks();
    task.id = new Date().getTime(); 
    tasks.push(task);
    saveTasks(tasks);
};

// Updates an existing task
export const updateTask = (updatedTask) => {
    const tasks = getTasks().map(task => (task.id === updatedTask.id ? updatedTask : task));
    saveTasks(tasks);
};

// Deletes a task by ID
export const moveToTrash = (taskId) => {
    const tasks = getTasks().map((task)=>{
        if(task.id === taskId){
            return {...task, status: -1};
        }
        return task;
    });
    saveTasks(tasks);
};



// Filters tasks by their status
export const filterTasksByStatus = (status) => getTasks().filter(task => task.status === status);

// Gets tasks based on due date
export const getTasksByDueDate = (dueToday = true) => {
    const tasks = getTasks();
    const now = new Date(); // Get current date and time

    return tasks.filter(task => {
        const taskDueDate = new Date(task.dueDate); 
        return taskDueDate > now && task.status === 0; 
    });
};

// Retrieves overdue tasks (tasks past due date and not completed)
export const getOverdueTasks = () => {
    const tasks = getTasks();
    const now = new Date(); // Get current date and time

    return tasks.filter(task => {
        const taskDueDate = new Date(task.dueDate); 
        return taskDueDate < now && task.status === 0; 
    });
};
// Removes all tasks with status -1 (in Trash) from localStorage
export const clearTrash = () => {
    const tasks = getTasks().filter(task => task.status !== -1);
    saveTasks(tasks);
};


export const initializeDummyTask = () => {
    // Check if tasks already exist in local storage
    if (getTasks().length === 0) {
        const today = new Date().toISOString().split('T')[0];
        const nextWeek = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0];
        const lastWeek = new Date(new Date().setDate(new Date().getDate() - 7)).toISOString().split('T')[0];

        // Define different dummy tasks
        // const dummyTasks = [
        //     {
        //         title: "Today's Task",
        //         description: "A task due today.",
        //         dueDate: today,
        //         priority: 1,
        //         status: 0, // 0 - not completed
        //     },
        //     {
        //         title: "Upcoming Task",
        //         description: "A task due in a week.",
        //         dueDate: nextWeek,
        //         priority: 2,
        //         status: 0,
        //     },
        //     {
        //         title: "Completed Task",
        //         description: "A completed task.",
        //         dueDate: lastWeek,
        //         priority: 3,
        //         status: 1, // 1 - completed
        //     },
        //     {
        //         title: "Overdue Task",
        //         description: "A task overdue since last week.",
        //         dueDate: lastWeek,
        //         priority: 1,
        //         status: 0,
        //     },
        //     {
        //         title: "Trashed Task",
        //         description: "A task in the trash.",
        //         dueDate: today,
        //         priority: 2,
        //         status: -1, // -1 - trashed
        //     }
        // ];

        // // Save each dummy task to local storage
        // dummyTasks.forEach(addTask);
    }
};

