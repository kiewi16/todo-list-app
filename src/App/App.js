import './App.css';
import { useState } from 'react';
import ToDoInput from '../ToDoInput/ToDoInput';
import ToDoList from '../ToDoList/ToDoList';

function App() {  
  const [toDos, setToDos] = useState([])

  function addToDoText(newToDoItem) {
    setToDos(prevToDos => [...prevToDos, newToDoItem])
  }

  function handleDelete(id) {
    const filteredToDos = toDos.filter(toDo => toDo.id !== id)
    setToDos(filteredToDos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Kim's To Do List</p>
      </header>
      <ToDoInput
        addToDoText={addToDoText}
      />
      <ToDoList 
        toDos={toDos}
        handleDelete={handleDelete}
      />
    </div>
  );
}
export default App;

// App component
  // lift state up to a common partent component when multiple child components need to access or modify the same state. Holds state for the entire todo list. 
// ToDoInput component
// ToDoList component
// ToDoItem component 