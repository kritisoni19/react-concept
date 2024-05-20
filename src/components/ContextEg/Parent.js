import React from "react";
import Child from "./Child";

import UserContext from './UserContext';


// Modifying context
function Parent(){

    return(
        <>
            {/* <UserContext.Provider value={name}> */}
             <UserContext.Provider value={{name:'Kiara Advani',interest:'Singing'}}>
                <Child/>
            </UserContext.Provider>
            {/* </UserContext.Provider> */}
        </>
    )

}

// we can not change the value of context otherwise it will overwrite
export default Parent;

