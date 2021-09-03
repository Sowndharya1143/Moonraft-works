import React from 'react';
import classes from './BannerText.css';
const bannerText = (props) =>{
    return(
        <div className = {classes.BannerText}>
            <ul className ={classes.Icons}>
                <li className={classes.Facebook}>
                    <a href="https://www.facebook.com/" target="_blank"><span className ="fa fa-facebook"></span></a>
                </li>
                <li className={classes.Twitter}>
                    <a href="https://www.twitter.com/" target="_blank"><span className ="fa fa-twitter"></span></a>
                </li>
                <li className={classes.Rss}>
                    <a href="https://www.google.com/" target="_blank"><span className ="fa fa-rss"></span></a>
                </li>
            </ul>
            <div className ={classes.BannerHeading}>
                <h5>Healthy Food</h5>
                <h4>Organic Store</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor
                    <br/> incididunt utadipiscing elit sed do eiusmod tempor incididunt Lorem</p>
            </div>
        </div>

    );
}
export default bannerText;