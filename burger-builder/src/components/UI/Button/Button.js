import React from 'react';
import classes from './Button.css';
const Button = (props) =>(
    <button 
    disabled ={props.disabled}
    className={[classes.Button,classes[props.btnTypes]].join(' ')}
    onClick={props.clickedmodal}
    >
    {props.children}</button>
)
export default Button;
