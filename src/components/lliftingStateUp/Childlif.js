

function Childlif(props){

    return (
        <>
            <h1>Child</h1>
            <button onClick={()=>{props.getData(' yeyy here i am')}}>Change Message</button>
        </>
    )
}

export default Childlif;