import React from 'react';
import img1 from "../../assets/jeans.jpg";
import img2 from "../../assets/avatar_hat.jpg";
import img3 from "../../assets/team1.jpg";
import img4 from "../../assets/team4.jpg";
import classes from "./Inspiration.css";
const Inspiration =(props)=>{
    return(
        <div className={classes.Inspiration}>
        <h4 className={classes.h4}>Inspiration</h4>
        <div>
            <img src={img1} alt="problem1" className={classes.Image}></img>
            <img src={img2} alt="problem2" className={classes.Image}></img>
            <img src={img3} alt="problem3" className={classes.Image}></img>
            <img src={img4} alt="problem4" className={classes.Image}></img>
        </div>
        </div>
    );
}
export default Inspiration;