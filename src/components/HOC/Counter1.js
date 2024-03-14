import HigherOrder from "./HigherOrder";

function Counter1(props){

    return <>
        {/* <h1>Counter1   {num}</h1> */}
        <button onClick={props.addHandleprop}>Add Counter 1</button>
    </>
}

export default HigherOrder(Counter1);