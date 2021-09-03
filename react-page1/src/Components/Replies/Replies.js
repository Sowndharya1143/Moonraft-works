import React from 'react'
import classes from './Replies.css';
const Replies = (props)=>{
    return(
        <div className={classes.ParentClass}>
                <img src={props.img} className={classes.Image} alt="pro"></img>
            
                <div className={classes.Content}>
                <h4 className={classes.name}>{props.name}&nbsp;<span className={classes.date} >{props.date}</span></h4>
                <p className={classes.para}>{props.desc}</p>
                </div>
        </div>
    );
}
export default Replies;