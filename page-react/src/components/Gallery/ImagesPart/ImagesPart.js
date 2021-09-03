import React from 'react';

import classes from './ImagesPart.css';
const ImagesPart = (props) =>{
    return(
        <img src={require("../../../images/" + props.path)}  className = {classes.Image} alt="sry"/>
    );
}
export default ImagesPart;