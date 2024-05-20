import { useState, useEffect } from "react";

function StopWatch(){

    const [counter, setCounter] = useState(0);
    const [intervalID, setIntervalID] = useState(null)

    const onClickStart = () => {
        if (intervalID === null) // small fix to prevent starting multiple intervals
          setIntervalID(setInterval(()=>{
            setCounter(counter => counter + 1)
          }, 100));
      }
    
      const onClickStop = () => {
        clearInterval(intervalID);
        setIntervalID(null);
      }

    return<>

        <label>XXX-{counter}-XXX</label>
        <button onClick={onClickStart}>Start</button>
        <button onClick={onClickStop}>Stop</button>
    </>
}

export default StopWatch;