import { useState } from "react";
import '../App.css'; 


function DarkTheme(){

    const [isdark, setIsDark] = useState(true);
 
   


    const isDarkToggle = ()=>{
        setIsDark(!isdark)
    }


    return <>
        <h1>
            Dark DarkTheme
            {/* {(theme? 'themedark': 'theme')} */}
            <div className={(isdark && 'isdark')}>
             <button onClick={isDarkToggle}>Toggle to dark</button>
            </div>
        </h1>

        {/* {inputText} */}
    
    </>

}

export default DarkTheme;