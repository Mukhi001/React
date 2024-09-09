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
    const [complaint,setComplaint]=useState("")
    const [dat,setData]=useState([])


 const modelHandler=(event)=>{
    const modelName=event.target.value;
    setModel(modelName)
    // console.log(modelName)
    const error=modelValidator(modelName)
    // console.log(error)
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
    // console.log(error)
    if(error){
        setMobileErr(error)
    }
    else{
        setMobileErr("")
    }
   
 }

 const complaintHandler=(event)=>{
    const complaint=event.target.value;
        setComplaint(complaint)
 }


 const modelValidator=(value)=>{
let error=""
const modelRegex=/^samsung/i
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
    var count=0;
    if(modelErr){
        alert("enter the proper model name")
        count++
    }
    if(mobileErr){
        alert("enter the proper model name")
        count++
    }

   if(count==0){
    const datar=async (modelName,mobileNumber,complaint)=>{
        const response = await axios.post("https://cryptowebapp-10.onrender.com/details",{
          
            "model":modelName,
            "mobile":mobileNumber,
            "complaint":complaint
        })

        setData([...dat,response["data"]])
        console.log(dat)
    }

   
    datar(model,mobileNumber,complaint)
   } 

   
    

 }




  return (
    <>
    <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="model">Model Name:</label>
          <select
            className="form-control"
            id="model"
            value={model}
            onChange={modelHandler}
          >
            <option>Choose Samsung mobile model...</option>
            <option>Samsung M31s</option>
            <option>Samsung s24</option>
            <option>Samsung A73</option>
            <option>Samsung s23</option>
          </select>
          {modelErr && <span style={{ color: "red" }}>{modelErr}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile number:</label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            value={mobileNumber}
            onChange={mobileHandler}
          />
          {mobileErr && <span style={{ color: "red" }}>{mobileErr}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="complaint">Complaint:</label>
          <textarea
            className="form-control"
            id="complaint"
            value={complaint}
            onChange={complaintHandler}
          />
          
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
{
    dat.length>0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dat.map((eachPerson, index) => {
                return (
                  <tr key={eachPerson.index}>
                    <td>{index + 1}</td>
                    <td>{eachPerson.model}</td>
                    <td>{eachPerson.mobile}</td>
                    <td>{eachPerson.complaint}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ):(
        <></>
      )
}
  
  </>
  );
}


export default Controlled;