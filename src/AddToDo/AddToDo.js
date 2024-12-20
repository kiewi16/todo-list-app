import { useState } from 'react'

function AddToDo( { addToDoItem } ) {
    const [newToDo, setNewToDo] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const toDoItem = {
            id: Date.now(),
            newToDo: newToDo, 
        }
        addToDoItem(toDoItem)
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
        </div>
    )
}
export default AddToDo