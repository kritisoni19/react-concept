

function TodoItem({todoItemText,deleteHandle,editHandle}){
    return <>
        <div className="flex" key={todoItemText.id}>
            <p>{todoItemText.text}</p>
            <button onClick={()=>deleteHandle(todoItemText)}>Delete</button>
            <button onClick={()=>editHandle(todoItemText)}>Edit</button>
        </div>
    </>
}

export default TodoItem