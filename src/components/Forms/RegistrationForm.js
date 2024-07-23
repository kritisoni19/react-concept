import React, { useState } from "react";



function RegistrationForm(){

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        occupation:'',
        gender:'',
        lang:[]

    })

    const onChangeHandler =(e)=>{

        if(e.target.name === 'lang'){
            // let copy = {...formData}
            if(e.target.checked){
                // copy.lang.push(e.taget.value)
            }
            else{
                // copy.lang = copy.lang.filter((item) => item !== e.target.value);
            }
            // setFormData(copy);
        }else{
            setFormData(()=>({
                ...formData,
                [e.target.name]:e.target.value
            }))
        }
    
        
        console.log(e.target.value);
        
    }
    const submitHandler =()=>{
        console.log(formData) 
    }
    return <>
        <h1>REGISTRATION FORM</h1>
        <div>
            <form>
                <label>
                    Name:   </label>
                     <input type="text"  name='username' onChange={onChangeHandler}/>
               <br></br><br></br>
                <label>
                    Email:   </label>
                     <input type="email"  name='email' onChange={onChangeHandler}/>
                 <br></br><br></br>
                <label>
                    Occupation: </label> <select name='occupation' onChange={onChangeHandler}>
                        <option value='java'>Java</option>
                        <option value='js'>Js</option>
                        <option value='html'>HTML</option>
                    </select>
                 <br></br><br></br>
                <label>
                    Gender:</label>  <input type="radio" value="Male" name='gender' onChange={onChangeHandler}/>Male
                    <input type="radio" value="Female" name='gender' onChange={onChangeHandler}/>Female
               <br></br><br></br>
                <label>
                    Languages:  </label>
                    <input type="checkbox" value="Laptop" name='lang' onChange={onChangeHandler}/>Laptop  
                    <input type="checkbox" value="Desktop" name='lang ' onChange={onChangeHandler}/>Desktop
                <br></br><br></br>

                <button type='button' onClick={submitHandler}>Submit</button>
            </form>
        </div>
    </>
}

export default RegistrationForm;