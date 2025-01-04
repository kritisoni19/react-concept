import { useState, useEffect } from "react";

function StopWatch(){

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    let interval;
    if (isRunning) {
        interval = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);
    } else {
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isRunning]);





// Milliseconds calculation
// const milliseconds = time % 100;

    // Method to start and stop timer

   

    return<>

<div>
<h1>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}</h1>
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={() => setIsRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
</div>
    </>
}

export default StopWatch;