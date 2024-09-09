import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


function Uncontrolled() {
    const userNameref=useRef("");
    const passwordref=useRef("");
    const arr=[];
    const [userdata,setuserdata]=useState([])
    
    const onSubmit=(event)=>{
event.preventDefault()
   const username1=userNameref.current.value;
   const password2=passwordref.current.value;
    const formErrors=validations(username1,password2)

    if(Object.keys(formErrors).length>0){
         if(formErrors.usernamError){
         alert("enter the proper username")
         }
         else if(formErrors.passwordError){
            alert("enter the proper password")
         }
    }
    else{
       loginapi(username1,password2) 
}
    }

 const validations=(username1,password2)=>{
    const FormErrors={};

    if(!username1){
      FormErrors.usernamError="enter the valid username"
    }
    else if(username1.length>20){
       FormErrors.usernamError="enter the username less than 20 characters"
    }

    if(!password2){
        FormErrors.passwordError="enter the valid username"
      }
      else if(password2.length>20){
         FormErrors.passwordError="enter the username less than 20 characters"
      }

      return FormErrors
 }

 const loginapi=async (username,password)=>{

    try{
    const response=await axios.post('https://dummyjson.com/auth/login',{ 
              username: username,
              password: password, 
})
    setuserdata(([...userdata, response.data]));
    }
    catch(err){
        console.log(err)
    }
}


const deleteHandler = (targetId) => {
    const updatedData = userdata.filter(
      (eachperson) => eachperson.id !== targetId
    );

    setuserdata(updatedData);
  };


  return (
    <>
    <form onSubmit={onSubmit}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Username</label>
      <input style={{borderRadius:"5px"}}
        type="text"
        placeholder="Enter username"
        ref={userNameref}
      />
      
    </div>
    <div className="form-group">
      <label>Password</label>
      <input style={{borderRadius:"5px"}}
        type="password"
        placeholder="Password"
        ref={passwordref}
      />
    </div>
    
    <button type="submit" class="btn btn-primary">submit</button>
      
    
  </form>


  {userdata.length > 0 ? (
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
              {userdata.map((eachPerson, id) => {
                return (
                  <tr key={eachPerson.id}>
                    <td>{id + 1}</td>
                    <td>{eachPerson.firstName}</td>
                    <td>{eachPerson.lastName}</td>
                    <td>
                      <button
                        onClick={() => deleteHandler(eachPerson.id)}
                      >delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <></>
      )}
  </>
  );
}


export default Uncontrolled;