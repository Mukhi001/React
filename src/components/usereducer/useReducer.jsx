import { useReducer } from "react"

const reducer=(state,action)=>{
if(action.type=="DELETE_PERSON"){
    const newPersons=state.data.filter(each=>{
      return each.id!=action.payload
    })
    return {
        ...state,
        data:newPersons,
        length:state.length-1
    }
}
}


export const UseReducerr=()=>{
    const initialState={
        data:[
            {id:1,firstname:'srikanth',email:'srikanth@gmail.com'},
            {id:2,firstname:'mukesh',email:'mukesh@gmail.com'}
        ],
        length:2
    }



const [state,dispatch]=useReducer(reducer,initialState);

const handleDelete=(id)=>{
   dispatch({
    type:'DELETE_PERSON',
    payload:id
   })
}

    return (
        <>
        <h2>Counter Current Length: {state.length}</h2>
       {
        state.data.map((each)=>{
            const {id,firstname,email}=each
            return  <div key={id}>
                <h3>{firstname}</h3>
                <h3>{email}</h3>
               <button onClick={()=>handleDelete(id)}>Delete</button>
            </div>
        })
       }
        </>
    )
}