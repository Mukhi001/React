import { useState } from "react"
import { createTodo } from "../jsHelpers/data"
import { Card } from "react-bootstrap"
import Cardd from "../components/card"

const Todo=()=>{
    const [todos,setTodos]=useState(createTodo())
    const [num,setNum]=useState("??")
    const addHandler=()=>{
        const currentLength=todos.length;
        const myObject={
            id:currentLength+1,
            text:`Index ${currentLength+1}`
        }
        setTodos([...todos,myObject])
    }



    const deleteHandler=(id)=>{
        const filteredItems=todos.filter(each=>each.id != id)
        setTodos(filteredItems)
    }

    const checkHandler=(id)=>{
        if(id%2==0){
            setNum("Even")
        }
        else{
            setNum("Odd")
        }
    }
    
    return(
      
        <>
        <h3>
              Todo Number
              Tap a card : {num}
            
          
        </h3>
        <button onClick={addHandler}>Add item</button>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        {
            todos.map(eachtodo=>{
               
                return (
                    <div>
                  <Cardd id={eachtodo.id} text={eachtodo.text} checker={()=>checkHandler(eachtodo.id)} onClick={()=>deleteHandler(eachtodo.id)}/>
               
                  </div>
                )
                
            })
        }
        </div>

       
        </>
    )
}

export default Todo