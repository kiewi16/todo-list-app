function ToDoListItem({toDo, id, handleDelete}) {
    return (
        <div>
            <p>{toDo}</p>
            <button onClick={() => handleDelete(id)}>DELETE</button>
        </div>
    )
}

export default ToDoListItem;