import React from 'react';

import classes from './home.css';
import Products from '../components/Products/Products';

export default (props) => {
  return (
    <div className={classes.Home}>
        <div className={classes.ProductsContainer}>
            <Products></Products>
        </div>
    </div>
  )
}