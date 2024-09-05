import { useState } from "react"
import { createTodo } from "../jsHelpers/data"

const Todo=()=>{
    const [todos,setTodos]=useState(createTodo())
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
    
    return(
      
        <>
        <h3>
            Todo Example
        </h3>
        <button onClick={addHandler}>Add item</button>

        {
            todos.map(eachtodo=>{
               
                return (
                    <>
                  <li key={eachtodo.id}>
                       {eachtodo.text}

                     
                </li>
                  <button onClick={()=>deleteHandler(eachtodo.id)}>delete item {eachtodo.id}</button>
                  </>
                )
                
            })
        }
        </>
    )
}

export default Todo