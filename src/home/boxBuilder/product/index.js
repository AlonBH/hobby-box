import React from 'react';
import styled from 'styled-components';



export default (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <h5>{props.price} $</h5>
        </div>
    );
}