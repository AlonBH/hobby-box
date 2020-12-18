import React from 'react';

import classes from './Products.css';
import Product from './Product/Product';

export default (props) => {
  return (
    <div className={classes.Products}>
      <Product />
      {/* <Product />
      <Product />
      <Product />
      <Product /> */}
    </div>
  )
}