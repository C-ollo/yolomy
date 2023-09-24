import React, { Component } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import NewProductForm from './NewProductForm';

class ProductControl extends Component {
   constructor(props){
       super(props);
       this.state ={
        productFormVisible: false
    }
   }
    handleClick = ()=>{
        this.setState({
            productFormVisible: true
        })
    }
   render() {
    let currentVisibleState = null;
    let addProductButton = null;
       if (this.state.productFormVisible){
           currentVisibleState = <NewProductForm />
       }else{
           currentVisibleState = <ProductList />
           addProductButton = <button onClick={this.handleClick}>Add Product</button>
       }
       return (
           <React.Fragment>
               {addProductButton}
               {currentVisibleState}
           </React.Fragment>
       )
    }
       
   
}

export default ProductControl