import { useState } from "react";



function AddDelete(){
    // onchange
    const[enterName, setEntername] = useState('');
    // showing on UI in form of array
    const[showUi, setShowUi] =  useState([]);



    const inputHandle =(e)=>{
        setEntername(e.target.value);
        // console.log(e.target.value)
    }
    const addHandle = ()=> {
        setShowUi([...showUi, enterName]);
        setEntername('')
    }

    const deleteHandle = (index)=>{
        const copyfiler = [...showUi];
         copyfiler.splice(index,1);
        setShowUi(copyfiler);
        console.log(copyfiler)
    }
    return (
        <>
            <input type='text' onChange={inputHandle} value={enterName}/>
            <button onClick={addHandle}>Add</button>

            {
                showUi.map((items,index)=>{
                    return (
                        <div key={index}>
                        {items} <button onClick={deleteHandle}>Delete</button>
                 
                    </div>
                    )
                })
            }
        </>
    )
}

export default AddDelete;