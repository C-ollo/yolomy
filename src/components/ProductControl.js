import React, { Component } from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';

class ProductControl extends Component {
   constructor(props){
       super(props);
       this.state ={}
   }
   render() {
       return (
           <React.Fragment>
            <AddProduct/>
           </React.Fragment>
       )
   }
}

export default ProductControl