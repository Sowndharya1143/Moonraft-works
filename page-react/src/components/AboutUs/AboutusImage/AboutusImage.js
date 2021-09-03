import React from 'react';
import classes from './AboutusImage.css';
import img1 from '../../../images/bb1.jpg';
import img2 from '../../../images/bb2.jpg';
const aboutusImage = (props) =>{
    return(
       <div className={classes.AboutusImage}>
            <img src={img1} alt="*sry"/>
            <img src={img2} alt="*sry"/>
       </div>

    );
}
export default aboutusImage;