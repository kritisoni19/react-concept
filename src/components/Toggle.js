
import {useState} from 'react';
// import HocComp from '../components/HocComp';

function Toggle(){

    const [showToggle, setShowToggle] = useState(false);
    const [hideText, setHideText] = useState(true)


    const handleToggle =()=>{
        setShowToggle(!showToggle)
    }

    const hideAndShowhandle = ()=>{
        setHideText(!hideText)
    }

    return <>
       <button type="button" onClick={handleToggle}>
        {
            showToggle ? <span>Yes Text Now Toggled</span>: <span>Text Toggle???</span>
        }
        </button>

        <h2>Hide and Show</h2>

        {hideText &&  <p>Hide text</p>}

        <button onClick={hideAndShowhandle}>Hide and Show</button>


        <div>
          
        </div>
        
    </>


}



export default Toggle;