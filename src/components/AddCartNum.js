import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";


function AddCartNum(){
    const dispatch= useDispatch();

    const cartCount = useSelector((store)=>store.cart.items)

    const addHandleItems=()=>{
        dispatch(addItem())
    }
   
    return <>
        <h1>adding on cart</h1>

        <p>Cart:{cartCount.length}</p>

        <button onClick={addHandleItems}>Click to add items</button>
    </>
}

export default AddCartNum;