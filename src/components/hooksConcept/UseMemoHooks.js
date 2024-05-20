
import React, { useMemo, useState } from "react";



function UseMemoHooks(){

    const [num, setNum] = useState(0);
    const [minus, setminus] = useState(0);

    const addHandle = ()=>{
        setNum(num +1)
        console.log(num+1)
    }

    const minusHandle = ()=>{
        setminus(minus -1)
        console.log(minus-1)
    }

    // function multiply(){
    //     return num * 2
    // }

    const multiplication = useMemo(function multiply() {
        console.log('call')
        return num * 2;
       
    },[num])
    return (
        <>
        <h1>Use Memo Examples</h1>
        <h1>{num}</h1>
        <button onClick={addHandle}> Addition </button>
        <h1>{minus}</h1>
        <button onClick={minusHandle}> Subtract </button>
        <h1>{multiplication}</h1> 
        </>
    )
}

export default UseMemoHooks;