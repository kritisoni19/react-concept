// import { useContext } from "react";
// import { myContext, myContext1} from "./Parent";
import { useContext } from 'react';
import UserContext from './UserContext'

//Consuming or Accessing the context

function Child(){

    const {name,interest} = useContext(UserContext);

    return(
        <>
            <h2>Context Child {name}-</h2>
            <h2> {interest}</h2>
        </>
    )

}
export default Child;