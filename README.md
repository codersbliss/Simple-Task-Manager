# Task Management Application

## Overview

This task management application allows users to organize and manage their tasks efficiently. It provides features such as task creation, editing, deletion, and categorization into sections like "Upcoming," "Completed," "Overdue," and "Archives." The application is built using React JS for the front-end and stores task data locally using the browser's local storage.

## Features

- *Task Sections*: Organize tasks into "Upcoming," "Completed," "Overdue," and "Archives."
- *Task Management*: Add, edit, and delete tasks.
- *Priority Levels*: Assign priority levels (High, Medium, Low) to tasks.
- *Search & Filter: Quickly search and filter tasks based on **title, priority and status*.
- *Responsive Design*: The app supports both desktop and mobile views.

## Setup Instructions

1. Clone the repository*:
   ```bash
   git clone https://github.com/codersbliss/Simple-Task-Manager.git
2. Navigate to the project directory**:
   ```bash
   cd task-manager
3. Install dependencies: Make sure you have Node.js and npm installed. Run*:
   ```bash
   npm install
   **Run the application**:
   ```bash
   npm run dev
## Assumptions Made

- Task data is stored in the browser's local storage.
- The user interface is responsive, but some complex layouts might not be supported on older browsers.
- Task priority is represented by numeric values, where 1 is high, 2 is medium, and 3 is low.
- Task status is represented by text values, such as:
  - "Upcoming" for tasks that are yet to be started.
  - "Completed" for tasks that are finished.
  - "Overdue" for tasks that are past their due date.
  - "Archives" for tasks that are no longer active like completed.

## Demo Link

You can view the live demo of the application at: [Live Demo](https://taskkmanagerappp.netlify.app)

## Screenshot

Here’s a screenshot of the task management application:

![Task Management Screenshot](https://i.postimg.cc/T1WBRb0S/Screenshot-2024-11-14-170808.png)
![Task Management Screenshot](https://i.postimg.cc/QNTXNKFh/Screenshot-2024-11-14-170909.png)
![Task Management Screenshot](https://i.postimg.cc/FH9mxPDH/Screenshot-2024-11-14-170942.png)
