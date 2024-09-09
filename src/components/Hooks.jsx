import React, {useState} from "react"


const Counter=()=>{
    const [age,setAge]=useState(10)

    // const IncHandler=()=>{
    // setAge(age+1)
    // }
    // const DecHandler=()=>{
    //     setAge(age-1)
    //     }

    //     const ResetHandler=()=>{
    //         setAge(0)
    //         }


            const Handler=(type)=>{
                switch(type){
                    // case "INCR":setInterval(()=>setAge((age)=>age+1),1000);for automatic increment
                    case "INCR":(setAge(age+1));

                    break;
                    case "DECR": setAge(age-1);
                    break;
                    case "RESET":setAge(0)
                }
            }
    

    return(
        <>
        <h3>Counter Example</h3>
        <h3>Count {age}</h3>
        <button onClick={()=>Handler("INCR")}>Increment</button>
        <button onClick={()=>Handler("DECR")}>Decrement</button>
        <button onClick={()=>Handler("RESET")}>Reset</button>


        </>
        
    )
}
export default Counter