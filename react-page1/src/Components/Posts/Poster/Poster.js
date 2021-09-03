import React from "react";
import classes from "./Poster.css"
const Poster =(props)=>{
    return(
        <div className={classes.Poster}>
        <img src={props.Img} className={classes.Image} alt="problem in Img"></img>
        <div className={classes.Detail}>
        <span className={classes.name}>{props.name}</span>
        <br/>
        <span className={classes.desc}>{props.desc}</span>
        </div>
        </div>
    );
}
export default Poster;