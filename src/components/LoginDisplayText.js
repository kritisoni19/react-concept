import React, { useEffect, useState ,useRef} from "react";
import "../App.css";

function LoginDisplayText() {

  const [name, setName] = useState('Hi Kriti')
   const[show, setShow] = useState(false)
   const Login = ()=>{
    setShow(true)
     setName(name)
    console.log(name)
  }
 
  return (
    <>
      {
        show &&  <h1>{name}</h1>
      }
      {
        !show &&  <button type='button' onClick = {Login}>Login</button>
      }
      
    </>
  );
}

export default LoginDisplayText;
