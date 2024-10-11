import { useEffect, useReducer, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";


const reducer = (state,action) => {
    if(action.type=="UPDATE_USERS_DATA"){
        return {
            ...state,
            userData:action.payload
        }
    }
    if(action.type=="LOADING"){
        return {
            ...state,
            isLoading:action.payload
        }
    }
    if(action.type=="ERROR"){
        return {
            ...state,
            iserror:action.payload
        }
    }
    if(action.type=='DELETE_USER'){
        const newUsers=state.userData.filter(each=>
            each.id!=action.payload
        )
        return {
            ...state,
            userData:newUsers
        }
    }
    if(action.type=='ONCLICK_EDIT'){
        return {
            ...state,
            isEditing:action.payload,
        }
    }
    if(action.type=="UPDATE_USER"){
        const newUsers=state.userData.map(each=>{
            if(each.id==action.payload.id){
                return {
                    id:action.payload.id,name:action.payload.name,email:action.payload.email
                }
            }
            else{
                return each
            }
        })
        return {
            ...state,userData:newUsers
        }
    }
  return state;
};

export const Final = () => {
  const fetchUsersData = async (URL) => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({ type: "ERROR", payload: { status: false, msg: "" } });

    const response = await fetch(URL);
    try {
      const data = await response.json();
      dispatch({ type: "UPDATE_USERS_DATA", payload: data });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "ERROR", payload: { status: false, msg: "" } });
    } catch (err) {
      dispatch({ type: "LOADING", payload: false });

      dispatch({ type: "ERROR", payload: { status: false, msg: err.message } });
    }
  };
  useEffect(() => {
    fetchUsersData("https://jsonplaceholder.typicode.com/users");
  }, []);

  const initialState = {
    userData: [],
    isLoading: true,
    isError: { status: false, msg: "" },
    isEditing:{status:false,id:'',name:'',email:''}
  };

  const [state, dispatch] = useReducer(reducer, initialState);

const updateData=(id,name,email)=>{
  dispatch({type:"UPDATE_USER",payload:{
    id,name,email
  }});
  dispatch({type:"ONCLICK_EDIT",payload:{status:false,id:'',name:'',email:''}})
}

  return (
state.isLoading ? 
<InfinitySpin/>:
    <>
       <h3>User Information</h3>
       {state.isEditing.status && <EditForm id={state.isEditing.id} comingTitle={state.isEditing.name} comingEmail={state.isEditing.email} updateData={updateData}/>}
      {
        state.userData.map(each=>{
            const {id,name,email}=each;
            return <div key={id} style={{backgroundColor:"red",gap:"10px"}}>
                <h3>{name}</h3>
                <p>{email}</p>
                <button onClick={()=>dispatch({
                    type:"DELETE_USER",
                    payload:id
                })}>delete</button>
                <button onClick={()=>dispatch({type:"ONCLICK_EDIT",payload:{status:true,id:id,name,email}})}>update</button>

            </div>
        })
      }

    </>
    
  );
};

export const EditForm=({id,comingTitle,comingEmail,updateData})=>{
 
    const [title,setTitle]=useState(comingTitle || "");
    const [email,setEmail]=useState(comingEmail || '')

    return (
           <>
           <form>
            <input type="text" name='title' id='title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type="email" name='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={()=>{updateData(id,title,email)}}>update data</button>
           </form>
           </>
    )
}

