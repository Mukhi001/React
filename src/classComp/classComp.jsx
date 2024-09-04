import { Component } from "react";
import { BasicCard } from "../components/card";
import { Button } from "react-bootstrap";
import { BsLightbulb } from "react-icons/bs";
import axios from "axios"
export class ClassComponent extends Component {
  state={
    turn:true
  }
 
  handler=()=>{
     this.setState({
      turn:!this.state.turn
     })
  }

  render() {
    return (
      <>
  
   {
    
    this.state.turn ?<> <button onClick={this.handler}>on</button> 
    <BsLightbulb onClick={this.handler} style={{height:"100px" , width:"100px"}}/>
    </>: <>
    <button onClick={this.handler}>off</button>
    <BsLightbulb onClick={this.handler} style={{backgroundColor:"yellow", height:"100px" , width:"100px"}}/>
    </>
   }
    
   

    </>
    );
  }
}


export class TableComponent extends Component {

state={
  products:[]
}
   data=async ()=>{
 const {data}=await axios.get('https://fakestoreapi.com/products')
 console.log(data)

 this.setState({
  products:data
 })
  }
  componentDidMount(){
    this.data()
  
  }
 

    render(){
      return (
        <>
        <h3>hi</h3>
        <table>
          {
            this.state.products.map(each=>{
              return (
                <>
                 <tr>
                        <td>{each.id}</td>
                        <td>{each.description}</td>
                        <td><img src={each.image}></img></td>
                        <td>{each.title}</td>
                        <td>{each.price}</td>
                        <td>{each.category}</td>
                       </tr>
                </>

              )
                      
            })

          }
          
        </table>
        
        </>


      )
    }



}
