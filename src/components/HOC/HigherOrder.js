// HOC is a comp which takes one compo as an argument and return a compo with some modification

import { useState } from "react";

const  HigherOrder = (OriginalComponent)=>{
    const NewComponent = () => {
        const [num, setNum] = useState(0);
        const addHandle = ()=>{
            setNum(num+1)
        }
        return (
            <>
                <h2>{num}</h2>
                <OriginalComponent addHandleprop = {addHandle}/>
            </>
        )
    }
    return NewComponent;
}


export default HigherOrder;
