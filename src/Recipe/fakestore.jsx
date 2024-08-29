import { Component } from "react";
import axios from "axios";
import { Spinn } from "../components/spinn";
import Cardd from "../components/card";

export class FakeStore extends Component {
  state = {
    products: [],
    category: [],
    product:[],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts = async () => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products`
    );
    

    if (status === 200) {
      this.setState({
        products: data,
        isLoading: false,
      });
    }
  };

  fetchCategories = async () => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
   

    if (status === 200) {
      this.setState({
        category: [...data, "all"],
        isLoading: false,
      });
    }
  };

  categorySelectedHandler = (selectedCategory) => {
    if (selectedCategory === "all") {
      this.fetchProducts();
    } else {
      this.fetchCategoryProducts(selectedCategory);
    }
  };
  

  fetchCategoryProducts = async (selected) => {
    const { data, status } = await axios.get(
      `https://fakestoreapi.com/products/category/${selected}`
    );

    if (status === 200) {
      this.setState({
        products: data,
      });
    }
  };

  handler = async (select) => {
    

   
      this.setState({
        product: select,
      });
    
  };

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <Spinn />
        ) : (
          <>
            <div>
              {this.state.category.map((eachCategory) => {
                return (
                  <>
                    <button
                      style={{
                        width: "150px",
                        height: "50px",
                        border: "none",
                        borderRadius: "4px",
                      }}
                      value={eachCategory}
                      onClick={() => this.categorySelectedHandler(eachCategory)}
                    >
                      {eachCategory}
                    </button>
                  </>
                );
              })}
            </div>
            <div style={{display:"flex"}}>
            <div>
              {this.state.products.map((eachItem) => {
                
                return (
                  <div key={eachItem.id} onClick={()=>this.handler(eachItem)}>
                  <Cardd 
                    key={eachItem.id}
                    title={eachItem.title}
                    source={eachItem.image}
                    description={eachItem.description}
                    price={`$ ${eachItem.price}`}
                  />
                  </div>
                );
                
              })}
            </div>

            <div>
          {
            
              
                <Cardd key={this.state.product.id} title={this.state.product.title} source={this.state.product.image} description={this.state.product.description} price={this.state.product.price}/>
              
            
          }
      </div>
            </div>
           
          </>
        )}
      </>
    );
  }
}