import { useState } from "react";
import {LANG} from '../utils/constants';
function Multilingual(){
    const [lang, setLang] =  useState('en')


    // const languageChange =(e)=>{
    //     setLang(e.target.value)
    //     console.log(lang)
    // }
    const data = LANG[lang]
console.log(lang)
    return (
            <>
                <h1>Multi-lingual site</h1>
                <select value={lang} onChange={(e)=>setLang(e.target.value)}>
                    <option value='en'>English</option>
                    <option value='hi'>Hindi</option>
                    <option value='sp'>Spanish</option>
                </select>

                <div>
                    <h1>
                        {data.title1}
                    </h1>
                    <p>{data.desc1}</p>
                </div>
                <div>
                    <h1>
                        {data.title2}
                    </h1>
                    <p>{data.desc2}</p>
                </div>
                <div>
                    <h1>
                        {data.title3}
                    </h1>
                    <p>{data.desc3}</p>
                </div>
            </>
    )
}
export default Multilingual;