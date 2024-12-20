import Task from '../Task/Task'

function ToDoList( { toDos} ) {
    const tasks = toDos.map(toDo => {
        return (
            <Task toDo = {toDo}/>
        )
    })
    return (
        <div>
           {tasks} 
        </div>
    )
}
export default ToDoList