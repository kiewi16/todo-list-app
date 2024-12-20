import './App.css';
import { useState} from 'react'
import ToDoList from '../ToDoList/ToDoList'
import AddToDo from '../AddToDo/AddToDo';

function App() {
  const [toDos, setToDos] = useState('')

  function addToDoItem (newToDo) {
    setToDos([...toDos, newToDo])
    console.log("toDos:", toDos)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Kim's To Do List
        </p>
      </header>
      <AddToDo addToDoItem={addToDoItem}/>
      <ToDoList toDos={toDos}/>
    </div>
  );
}
export default App;