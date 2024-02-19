import { useContext } from "react";
import { myContext, myContext1} from "./Parent";

function Child(){
    const useName = useContext(myContext);
    const useName1 = useContext(myContext1);
    return(
        <>
            <h1>Context Child {useName}</h1>
            <h1>Context Child {useName1}</h1>


        </>
    )

}
export default Child;