
import React, { useCallback, useState } from "react";
import UseCallbackHooksChild from './UseCallbackHooksChild';

function UseCallbackHooks(){

   const [count, setCount] = useState(0);

    const learning = useCallback(()=>{

    },[])
    // const learning =()=>{
    //     console.log('learning calll')
    // }

const addHandle = ()=>{
    setCount(count+1);
}
    return (
        <>
            <h2>Use Callback Hooks</h2>
            
            <UseCallbackHooksChild learning={learning}/>
            <h2>{count}</h2>
            <button onClick={addHandle}>Add</button>
        </>
    )
}

export default UseCallbackHooks;