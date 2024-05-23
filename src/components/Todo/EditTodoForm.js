

function EditTodoForm({updateHandle,inputChangeValue, setInputChangeValue,setIsEditEnable}){

    return <>
            <form onSubmit={updateHandle}>
                <input type='text' value={inputChangeValue} 
                onChange={(e)=>setInputChangeValue(e.target.value)}/>
                <button type='submit'> Update </button>
                <button type='button' onClick={()=>{
                      setIsEditEnable(false);
                      setInputChangeValue('')
                }}> Cancel </button>
            </form>
        </>

}

export default EditTodoForm