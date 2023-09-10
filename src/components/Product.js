import '../styles/product.css';
import React from 'react';
import PropTypes from 'prop-types';
function Product(props) {
   
   return (
       <React.Fragment>
           <p> {props.name} </p>
           <p>Price - {props.price} </p>
       </React.Fragment>
   )
}
Product.propTypes ={
    name: PropTypes.string,
    Price: PropTypes.string
 }

export default Product