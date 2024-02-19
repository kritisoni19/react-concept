
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
            <h1>Use Callback Hooks</h1>
            
            <UseCallbackHooksChild learning={learning}/>
            <h1>{count}</h1>
            <button onClick={addHandle}>Add</button>
        </>
    )
}

export default UseCallbackHooks;