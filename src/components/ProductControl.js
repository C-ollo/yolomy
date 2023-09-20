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
   render() {
    let currentVisibleState = null;
       if (this.state.productFormVisible){
           currentVisibleState = <NewProductForm />
       }else{
           currentVisibleState = <ProductList />
       }
       return (
           <React.Fragment>
               <AddProduct />
               {currentVisibleState}
           </React.Fragment>
       )
    }
       
   
}

export default ProductControl