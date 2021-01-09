import React from 'react';

import classes from './home.css';
import Products from '../components/Products/Products';

import BoxBuilder from './boxBuilder/boxBuilder';

export default (props) => {
  return (
    <div className={classes.Home}>
        {/* <div className={classes.ProductsContainer}>
            <Products></Products>
        </div> */}
        <BoxBuilder />
    </div>
  )
}