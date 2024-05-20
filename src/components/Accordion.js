
import { useState } from "react"
import AccordionChild from './AccordionChild'

function Accordion(){
    const [parashow, setParaShow] = useState(0)
    const obj = [
        {
            id:1,
            header:'header 1 content',
            headerPara:'Para 1'
        },
        {
            id:2,
            header:'header 2 content',
            headerPara:'Para 2'
        },
        {
            id:3,
            header:'header 3 content',
            headerPara:'Para 3'
        }
    ]

   
    return <>
        <h2>Accordion</h2>

        <div className="accordion-container">
            {
                obj.map((e,index)=>{
                    return( 
                    
                      <AccordionChild header={e.header} hearPara ={e.headerPara} key={e.id}
                       parashow={index === parashow ? true: false}
                       setParaShow={()=>setParaShow(index)}
                       />
                    
                    )
                })
            }
          
        </div>
    </>

}

export default Accordion;