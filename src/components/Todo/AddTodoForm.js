
function AddTodoForm({formSubmitHandle,inputChangeValue, setInputChangeValue}){
    return<>
            <form onSubmit={formSubmitHandle}>
                <input type='text' value={inputChangeValue} onChange={(e)=>setInputChangeValue(e.target.value)}/>
                <button type='submit'> ADD </button>
            </form>
    </>
}

export default AddTodoForm;
