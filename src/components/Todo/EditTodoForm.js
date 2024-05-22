

function EditTodoForm({updateHandle,inputChangeValue, setInputChangeValue}){

    return <>
            <form onSubmit={updateHandle}>
                <input type='text' value={inputChangeValue} 
                onChange={(e)=>setInputChangeValue(e.target.value)}/>
                <button type='submit'> Update </button>
            </form>
        </>

}

export default EditTodoForm