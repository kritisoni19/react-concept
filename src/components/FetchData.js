
import { useEffect, useState } from "react";

function FetchData(){

    const [data, setData] = useState([]);

const getData = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await data.json();
    console.log(result);
    setData(result);
}

    useEffect(()=>{
        getData()
    },[])
    return <>
        <h2>
            Display API Data
        </h2>
        <div style={{width:'800px',margin:'0 auto'}}>
            <table>
            <thead>
                <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Status</th>
                    
                </tr>
                </thead>
                    <tbody>
                {
                    data.map((e)=>{
                        return  <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.title}</td>
                            <td>{e.completed}</td>
                            </tr>
                    })
                    
                }
              
                        
                    </tbody>
           
            </table>
        </div>
    </>
}

export default FetchData;