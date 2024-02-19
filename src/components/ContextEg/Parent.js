import React, { createContext } from "react";
import Child from "./Child";

const myContext =  createContext();
const myContext1 =  createContext();

function Parent(){


    let name= 'Kriti Gaurav';
    let engdate = '22jan'

    return(
        <>
            <myContext.Provider value={name}>
             <myContext1.Provider value={engdate}>
                <Child/>
                </myContext1.Provider>
            </myContext.Provider>
        </>
    )

}

// we can not change the value of context otherwise it will overwrite
export default Parent;
export {myContext,myContext1}
