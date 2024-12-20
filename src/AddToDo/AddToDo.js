import { useState } from 'react'
import ToDoList from '../ToDoList/ToDoList'

function AddToDo() {
    const [toDos, setToDos] = useState([])
    const [newToDo, setNewToDo] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const toDoItem = {
            id: Date.now(),
            task: newToDo,
        }
        setToDos(prevToDos => [...prevToDos, toDoItem])
        clearInput()
    }

    function clearInput() {
        setNewToDo("")
    }

    return (
        <div>
            <form>
                <label className="add-to-do-label">add to do:</label>
                <input
                    type="text"
                    placeholder="to do"
                    name="to do"
                    value={newToDo}
                    onChange={event => setNewToDo(event.target.value)}
                />
                <button onClick={(event) => handleSubmit(event)}>ADD</button>
            </form>
            <ToDoList toDos={toDos}/>
        </div>
    )
}
export default AddToDo