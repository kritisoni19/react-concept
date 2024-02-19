
import React,{memo} from "react";



function UseCallbackHooksChild({learning}){

console.log(' usecallback Child component called')
   
    return (
        <>
             Use Callback Child
        </>
    )
}

export default memo(UseCallbackHooksChild);