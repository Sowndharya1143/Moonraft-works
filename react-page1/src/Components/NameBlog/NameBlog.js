import React from 'react';
import img from "../../assets/avatar_girl2.jpg";
import classes from "./NameBlog.css";
const NameBlog = (props) =>{
    return(
        <div className={classes.NameBlog}>
        <img src={img} alt="namepro" className={classes.Image}/>
        <div className={classes.Content}>
            <h4 className={classes.h4}>My Name</h4>
            <p className={classes.para}>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
            
        </div>
        </div>
    );
}
export default NameBlog;