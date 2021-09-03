import React from "react";
import classes from "./Tag.css";
const Tag = (props) =>{
    return(
        <p className={classes.Tag}>{props.Tagname}</p>
    );
}
export default Tag;