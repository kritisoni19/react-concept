
import { useEffect, useState ,Fragment} from "react";

function FetchData(){

    const [data, setData] = useState([]);
const getData = async()=>{
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const result = await data.json();
    console.log(result);
    setData(result);
}

    useEffect(()=>{
        getData();
    },[])

    
    return data.length === 0? 'Loading.....': 
    
    <>
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
                    data.map((e,index)=>{
                        return  <Fragment key={index}>
                        <p>{e.title}</p>
                        </Fragment>
                    })
                    
                }
              
                        
                    </tbody>
           
            </table>
        </div>
    </>
}

export default FetchData;