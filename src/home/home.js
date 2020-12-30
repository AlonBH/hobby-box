import React from 'react';

import classes from './home.css';
import Products from '../components/Products/Products';

export default (props) => {
  return (
    <div className={classes.Home}>
      <Products />
    </div>
  )
}