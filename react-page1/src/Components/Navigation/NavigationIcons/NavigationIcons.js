import React from 'react';
import classes from './NavigationIcons.css';
const NavigationIcons =(props)=>{
    return(
        <a href="#k" className={classes.Icons} ><i className={props.icons}/></a>
    )
}
export default NavigationIcons;