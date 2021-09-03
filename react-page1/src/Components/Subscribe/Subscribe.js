import React from 'react';
import classes from './Subscribe.css';
const Subscribe =(props)=>{
    return(
        <div className={classes.Subscribe}>
        <h4 className={classes.h4}>Subscribe</h4>
        <div className={classes.textArea}>
            <p>Enter your e-mail below and get notified on the latest blog posts.</p>
            <input type="text" placeholder="Enter e-mail" className={classes.textBox}/>
            <input type="submit" value="Subscribe" className={classes.button}/>
        </div>
        </div>
    );
} 
export default Subscribe;