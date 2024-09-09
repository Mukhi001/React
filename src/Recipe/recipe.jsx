import { Component } from "react"
import { Spinner } from "react-bootstrap";
import { Spinn } from "../components/spinn";
import { SecondaryHeading } from "../components/heading";
import CustomList from "../components/list";
import axios from "axios";

class RecipeList extends Component{
    state={
        recipe:[],
        loading:true,
        error:false
    }

       componentDidMount(){
        console.log("hi,iam executed")
        this.fetchData();
       }

       fetchData= async()=>{
        const {status,data}=await axios.get('https://dummyjson.com/recipes/')
        if(status==200){
            this.setState({
                recipes:data.recipes,
                loading:false
            })
        }
        
       }

    //    fetchData=async ()=>{
    //     const data=await fetch('https://dummyjson.com/recipes/')
    //     const {recipes}=await data.json();
    //     this.setState({
    //         recipes:recipes,
    //         loading:false
    //     })
    //    }


    render(){
        return (
            <>
             <h3>Recipe Listing</h3>
            {
                this.state.loading ? <Spinn/> : 
                <>
                 <h2>Recipess....</h2>
                {
                    this.state.recipes.map(eachitem => {
                        return (
                            <div key={eachitem.id}>
                                <h3>
                                    {eachitem.name}
                                </h3>
                                <img src={eachitem.image} height={100} width={100}></img>
                                <SecondaryHeading heading={`Ingredients for ${eachitem.name}`}></SecondaryHeading>
                                <CustomList list={eachitem.ingredients}/>
                                <SecondaryHeading heading={`Instructions for ${eachitem.name}`}></SecondaryHeading>
                                <CustomList list={eachitem.instructions}/>

                            </div>
                        )
                    })
                }
                </>
               
            }
            </>
           
        )
    }
}

export default RecipeList