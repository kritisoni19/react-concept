


function AccordionChild({ header, hearPara,parashow,setParaShow }) {
   
    const handleAccHandle=()=>{
        setParaShow();
    }


    return <>
        <div>
            <div className="header" style={{ background: 'antiquewhite' }}
             onClick={handleAccHandle}>

                <h2>{header}</h2>
            </div>
            {
                parashow && <div>
                    <p>{hearPara}</p>
                </div>
            }
        </div>
    </>
}

export default AccordionChild;