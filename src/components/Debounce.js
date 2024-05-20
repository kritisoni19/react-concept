

import React, { useEffect, useState } from "react";

function Debounce(){
        const[searchQuery , setsearchQuery] = useState('');
        const[suggestionList, setSuggestionList] = useState([])
        const getData = async()=>{
            console.log('API CALL- ' + searchQuery)
            const data = await fetch('http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='+searchQuery);
            const json = await data.json()
            console.log(json[1])   
            setSuggestionList(json[1]);
        }

        useEffect(()=>{
            const timer = setTimeout(()=>{
                getData()
            },300);

            return () =>{
                clearTimeout(timer);
            }
         
        },[searchQuery])

    return <>
    <h1>Hi debounce page</h1>
    <input type='text' value={searchQuery} onChange={(e)=>setsearchQuery(e.target.value)}/>

        <div>
           
            {
                suggestionList.map((e,index)=>{
                    return <p key ={index}>{e}</p>
                })
            }
        </div>


    </>
}

export default Debounce;