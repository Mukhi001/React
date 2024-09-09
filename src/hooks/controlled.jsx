import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


function Controlled() {
    const [model,setModel]=useState("")
    const [mobileNumber,setMobileNumber]=useState("")
    const [modelErr,setModelErr]=useState("")
    const [mobileErr,setMobileErr]=useState("")

 const modelHandler=(event)=>{
    const modelName=event.target.value;
    setModel(modelName)
    console.log(modelName)
    const error=modelValidator(modelName)
    console.log(error)
    if(error){
        setModelErr(error)
    }
    else{
        setModelErr("")
    }
   
 }

 const mobileHandler=(event)=>{
    const mobileNumber=event.target.value;
    setMobileNumber(mobileNumber)
    
    const error=mobileValidator(mobileNumber)
    console.log(error)
    if(error){
        setMobileErr(error)
    }
    else{
        setMobileErr("")
    }
 }


const modelValidator=(value)=>{
let error=""
const modelRegex=/^samsung/
if(!value){
    error="please enter a samsung model"
}
else if(!modelRegex.test(value)){
    error="please enter a proper samsung model name"
}
return error

 }

 const mobileValidator=(value)=>{
    let error=""
    const mobileRegex=/^[6-9][0-9]{9}$/
    if(!value){
        error="please enter a mobile number"
    }
    else if(!mobileRegex.test(value)){
        error="please enter a proper mobile number"
    }
    return error
    
     }


 const onSubmit=(event)=>{
    event.preventDefault();
    if(modelErr){
        alert("enter the proper model name")
    }
    if(mobileErr){
        alert("enter the proper model name")
    }

 }


  return (
    <>
    <form onSubmit={onSubmit}>
    <div className="form-group">
        <h1>SAMSUNG SERVICE FORM</h1>
      <label htmlFor="exampleInputEmail1">MODEL</label>
      <input style={{borderRadius:"5px"}}
        type="text"
        placeholder="Enter Model Name"
       value={model}
       onChange={modelHandler}
      />
      <div>
      {modelErr && <span style={{color:"red"}}>{modelErr}</span>}
      </div>



     
    </div>
    <label htmlFor="exampleInputEmail1">MOBILE NUMBER</label>
      <input style={{borderRadius:"5px"}}
        type="text"
        placeholder="Enter Model Name"
       value={mobileNumber}
       onChange={mobileHandler}
      />
      <div>
      {mobileErr && <span style={{color:"red"}}>{mobileErr}</span>}
      </div>

   
   
   
    <div>
    <button type="submit" className="btn btn-primary">submit</button>
    </div>

    
   
      
    
  </form>

  </>
  );
}


export default Controlled;