import React from 'react';
import classes from './List.css';
const list = (props) =>{
    return(
        <div className={classes.List}>
            <div className={classes.ListText}>
                <div className={classes.Amount}><span>$ {' '}</span><span>{props.amount}</span></div>
                <h5 className={classes.Listtitle}>{props.title}</h5>
                <p>{props.desc}</p>
            </div>
            <img src={require("../../../images/" + props.image)} className={classes.smallImages} alt="sry"/>
        </div>
    );
}
export default list;