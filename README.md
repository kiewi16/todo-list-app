# React Component Prompt: Todo List Application
Task:
Build a Todo List component in React. The component should have the following functionality:

Add Todo:

The user should be able to add a new todo by typing in a text input and clicking an "Add" button.
Each todo should have a title (string) and an id (unique identifier).
Display Todos:

List all todos in a vertical list below the input field.
Each todo should display its title.
Mark as Completed:

The user should be able to click on a todo to mark it as completed. When marked, the todo should visually change (e.g., strike-through or a different color).
Delete Todo:

Each todo should have a delete button that removes the todo from the list.
Persist Data:

Implement local state (using React's useState) to manage the todo list.
Use useEffect to save the todo list to localStorage so that the data persists across page reloads.
Bonus: Filter Todos (Optional):

Implement buttons to filter the todos by status:
Show all todos
Show only completed todos
Show only active todos
Things to Consider:
Ensure the component is reusable (e.g., avoid hardcoding data).
Break down the component into smaller, reusable components if possible (e.g., TodoItem).
Handle edge cases like adding empty todos, marking todos without titles, etc.
Ensure accessibility (e.g., using semantic HTML, adding aria-labels where necessary).
Make the UI user-friendly, even for small tasks (consider loading states, empty lists, etc.).
Bonus Challenge:
