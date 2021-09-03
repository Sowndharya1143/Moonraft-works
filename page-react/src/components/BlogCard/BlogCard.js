import React from 'react'

import img1 from '../../images/bb2.jpg';
import classes from './BlogCard.css';
const blogCard = (props) =>{
    return(
        <div className={classes.BlogCard}>
            <img src={img1}  className={classes.BlogImage} alt="sry"/>
            <div className={classes.YellowDate}>JUL <br/>15</div>
            <div className={classes.BlogText}>
            <h4>Health Benefits Of A Raw Food</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <div className={classes.DateTags}><span> 12/4/2019  </span><span> 3 </span><span>Tags</span></div>
            </div>
        </div>
    );
}
export default blogCard;