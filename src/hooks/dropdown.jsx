import { useState } from "react"
import { nations } from "../jsHelpers/nation"




function DropDownn(){
    
    const nation=["India","USA","Africa","Cuba","UK"]

    const [value,setSelectedValue]=useState([])

    const selectedValue=(event)=>{
        setSelectedValue(nations(event.target.value))
    }
   
    return (
        <>
        <h1>Select Nation</h1>
        <select onChange={selectedValue}>
            <option value="">Select</option>
         {
              nation.map(each=>
            <option value={each}>{each}</option>
            )
         }
        </select>
         

        <h1>Select State</h1>
        <select>
              <option selected>select</option>
              {
                value.map(each=>
                    <option value={each}>{each}</option>
                )
              }

        </select>
        </>
    )
}
export default DropDownn