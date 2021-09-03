import React from 'react';
import classes from './Icon.css';
const Icon =(props)=>{
    return(
        <p className={classes.Icon}><i className={[props.iconvalue,"fa-lg"].join(' ')}></i></p>
    );
}
export default Icon;