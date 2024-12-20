import { useState } from 'react'

function ToDoInput( {addToDoText} ) {
    const [toDoText, setToDoText] = useState("")

    function handleClick(e) {
        e.preventDefault()
        const newToDoItem = {
            id: Date.now(),
            task: toDoText
        }
        addToDoText(newToDoItem)
        clearInput()
    }

    function clearInput() {
        setToDoText('')
    }

    return (
        <form>
            <input
                id="toDo"
                type="text"
                value={toDoText}
                onChange={(e) => setToDoText(e.target.value)}
            />
            <button onClick={(e) => handleClick(e)}>ADD</button>
        </form>
    )
}

export default ToDoInput;