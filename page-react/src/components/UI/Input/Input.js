import React from 'react';

import classes from './Input.css';
const input =(props) =>{
    let values="";
    switch(props.elementType) {
        case "input":
            values= <input type={props.elementType} 
            className={classes.Input} 
            placeholder={props.elementConfig.placeholder}
            value={props.value}
            onChange={props.ChangeValue} />;
            break;
        case "textarea":
            values=<textarea type={props.elementType}
            className={classes.Message}
            placeholder={props.elementConfig.placeholder}
            value={props.value}
            onChange={props.ChangeValue} rows="5"/>
            break;
        default:
            break;
    }
    return( 
        values
        
    );
}
export default input;