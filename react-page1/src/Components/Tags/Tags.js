import React from "react";
import classes from "./Tags.css";
import TagName from "./Tag/Tag";

const Tags =(props) =>{
    
      var value = props.Tags.map((Tag)=>{
        return <TagName  key={Tag.id} Tagname={Tag.val}/>
    })
    return(
        <div className={classes.Tags}>
        <h4 className={classes.Tag}>
        Tags
        </h4>
        <div className={classes.TagSection}>
        {value}
        </div>
        </div>
    );
}
export default Tags;