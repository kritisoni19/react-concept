
import React, { useState } from 'react';

function Alert(){
    const [printName, setPrintName] = useState('kriti')
    const clickHandle =()=>{
        // prompt('Enter Name')
        setPrintName('soiniu')
    }
    return <>
    <h2>Hi I am alert</h2>\
    <h2>Hi {printName}</h2>
    <button onClick={clickHandle}>Click me </button>

    </>
}

export default Alert;