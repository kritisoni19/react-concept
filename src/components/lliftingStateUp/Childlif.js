

function Childlif(props){

    return (
        <>
            <h2>Child</h2>
            <button onClick={()=>{props.getData(' yeyy here i am')}}>Change Message</button>
        </>
    )
}

export default Childlif;