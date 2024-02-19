
import {useRef, useState} from 'react';

function RefHook(){

    const [name, setName] = useState('')

    const refElement = useRef();
    const submitHandle = ()=>{
        refElement.current.style.color = 'yellow'
    }
    return (
        <>
            <h2> uSe ref Hook</h2>
            {name}
            <input type='text' ref={refElement}  onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={submitHandle}>Submit</button>
        </>
    )
}

export default RefHook;