import React from 'react';
 
import classes from './HeaderButton.css';
const HeaderButton = (props) => {
    return(
        <button className={classes.option} >{props.children}</button>
    );
}
export default  HeaderButton;