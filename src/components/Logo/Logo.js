import React from 'react';

import hobbyBoxLogo from '../../assets/images/hobby-box-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={hobbyBoxLogo} alt="HobbyBox"></img>
  </div>
);

export default logo;