import { useRef, useState } from "react"

const UseRefExample=()=>{
   const reference=useRef(0);
   const [age,setAge]=useState(0)

   const clickHandler=()=>{
    reference.current+=1;
    setAge(age+1)
    console.log(reference.current)
   }

    return (
    <>
    <h2>UseState -- {age}</h2>
    <h2>Useref reference-- {reference.current}</h2>
    <button onClick={clickHandler}>click</button>
    </>
    )
}

export default UseRefExample