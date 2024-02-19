
// import { useState } from "react";
// import { useEffect } from "react";


function EffectHook(){

    // const[showData, setShowData] = useState([]);

    // const getData = async()=>{
    //     const data = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const result = await data.json();
    //     console.log(result);
    //     setShowData(result)
    // }

    // useEffect(()=>{
    //     // getData()
    // },[])
    return (
        <>
            <h2>Use Effect hook</h2>
           
                 <div>
                    <table>
                     <thead>
                     <tr>
                            <td>S.NO</td>
                            <td>name</td>
                            <td>email</td>
                        </tr>
                     </thead>
                        {/* {
                             
                                showData.map((e)=>{
                                    return  <tbody key={e.id}>
                                        <tr>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.email}</td>
                                    </tr>
                                    </tbody>
                                })
                        } */}
                       
                    </table>
                </div>
            
            
        </>
    )
}

export default EffectHook;