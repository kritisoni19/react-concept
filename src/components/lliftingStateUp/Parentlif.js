
import { useState } from "react";
import Childlif from "./Childlif";

function Parentlif(){

    const[message,setMessage] = useState('Hi I am going to change')

        const getData =(msg)=>{
            setMessage(msg)
        }

        return (
            <>
                <h1>Parent Data</h1>
                <h2>{message}</h2>
                <Childlif getData={getData}>

                </Childlif>
            </>
        )
}

export default Parentlif;