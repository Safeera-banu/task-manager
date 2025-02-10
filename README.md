# Task Manager

Task Manager is a simple React-based application that allows users to manage their daily tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The tasks are stored in the browser's local storage, ensuring persistence across sessions.

## Features

- **Add Tasks**: Users can add new tasks by typing into the input field and clicking the "Save" button.
- **Edit Tasks**: Existing tasks can be edited by clicking the edit button.
- **Delete Tasks**: Tasks can be removed using the delete button.
- **Mark as Completed**: Tasks can be marked as completed by checking the corresponding checkbox.
- **Toggle Finished Tasks**: Users can show or hide completed tasks using the toggle switch.
- **Persistent Storage**: Tasks are stored in the browser's local storage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Safeera-banu/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`.

## Usage

1. Enter a task in the input field and click the "Save" button to add it to the task list.
2. Use the checkbox to mark tasks as completed.
3. Edit or delete tasks using the respective buttons next to each task.
4. Toggle the "Show Finished Task" checkbox to show or hide completed tasks.

## Code Overview

### Dependencies

- **React**: For building the user interface.
- **UUID**: To generate unique IDs for tasks.
- **React Icons**: For using edit and delete icons.

### Key Components

- `App.js`: The main component that manages the state and renders the UI.
- **State Management**:
  - `useState` for managing tasks and their states.
  - `useEffect` for initializing tasks from local storage.
- **Local Storage**: Used to persist tasks between browser sessions.

### Functions

- `handleAdd`: Adds a new task to the task list.
- `handleEdit`: Edits an existing task.
- `handleDelete`: Deletes a task from the list.
- `handleCheckbox`: Marks a task as completed or uncompleted.
- `toggleFinished`: Toggles the visibility of completed tasks.


## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.


