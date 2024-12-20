import ToDoListItem from '../ToDoListItem/ToDoListItem'

function ToDoList({toDos, handleDelete}) {
    const toDoList = toDos.map(toDo => {
        return (
            <ToDoListItem
                key={toDo.id}
                id={toDo.id}
                toDo={toDo.task}
                handleDelete={handleDelete}
            />
        )
    })
    return (
        <div className="to-do-list-item">
            {toDoList}
        </div>
    )
}

export default ToDoList