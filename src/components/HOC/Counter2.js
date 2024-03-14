// import { useState } from "react";
import HigherOrder from "./HigherOrder";

function Counter2(props){

    return <>
        <button onClick={props.addHandleprop}>Add Counter 2</button>
    </>
}

export default HigherOrder(Counter2);