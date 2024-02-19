import { useEffect, useState } from "react";

function Search(){

    const [search,setSearch] = useState('');
    
    console.log(search)

    useEffect(()=>{
       
        const timer = setTimeout(()=>{
             getSearchResult()
        },1000)

        return()=>{
            clearTimeout(timer)
        }

    },[search])

    const getSearchResult =()=>{
        // API calll
        console.log('api calll......')
    }
 
    return (
        <>
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}} value ={search}/>
            <button type='button' >Search</button>
        </>
    )
}

export default Search;