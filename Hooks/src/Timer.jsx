import { useEffect, useState } from "react"


const Timer = () => {

    const [time,setTime]=useState(0);
    const [isRunning, setIsRunning] = useState(true);
    // useEffect(()=>{
    //     //Mounted
    //        const timer=setInterval(()=>{
    //          setTime(time+1);  
    //        },1000)     

    // return function(){
    //     clearInterval(timer);
    // }
    // },[time])
    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
              setTime(time+1);  
            },1000)
        }
        return function(){//this cleanup function
            clearInterval(timer);
        }
    },[isRunning,time]//updated;
    );


    
    const handleStop=()=>{
        setIsRunning(false);
        alert("Timer Stopped")
    }


  return (
    <div>
        <h1>Timer</h1>
        <p>Current Time is {time}</p>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default Timer