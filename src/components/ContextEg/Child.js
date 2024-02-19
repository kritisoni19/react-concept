import { useContext } from "react";
import { myContext, myContext1} from "./Parent";

function Child(){
    const useName = useContext(myContext);
    const useName1 = useContext(myContext1);
    return(
        <>
            <h2>Context Child {useName}</h2>
            <h2>Context Child {useName1}</h2>


        </>
    )

}
export default Child;