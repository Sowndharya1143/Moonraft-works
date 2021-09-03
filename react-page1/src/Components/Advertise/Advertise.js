import React from "react";
import classes from "./Advertise.css";
const Advertise =(props) =>{
    return(
        <div className={classes.Advertise}>
        <h4 className={classes.h4}>Advertise</h4>
        <div className={classes.adarea}>
        <p className={classes.area}>Your AD Here</p>
        </div>
        </div>
    );
}
export default Advertise;