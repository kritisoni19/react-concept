
import { useState } from "react";
import Childlif from "./Childlif";

function Parentlif(){

    const[message,setMessage] = useState('Hi I am going to change')

        const getData =(msg)=>{
            setMessage(msg)
        }

        return (
            <>
                <h2>Parent Data</h2>
                <h2>{message}</h2>
                <Childlif getData={getData}>

                </Childlif>
            </>
        )
}

export default Parentlif;