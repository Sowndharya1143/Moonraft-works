import React from 'react';
import classes from '../AboutUs/Aboutus.css';
import AboutusImage from '../AboutUs/AboutusImage/AboutusImage';
import AboutusText from '../AboutUs/AboutusText/AboutusText';
import ScrollableAnchor from 'react-scrollable-anchor'
const aboutus = (props) =>{
    return(
        <ScrollableAnchor id={'Aboutus'}>
        <div  className={classes.Aboutus}>
        <h1 className={classes.Title}>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
         tempor incididunt ut labore et Lorem ipsum</p>
         <div className={classes.ImageBlog}>
         <AboutusImage/>
         <AboutusText/>
         </div>
        </div>
        </ScrollableAnchor>
    );
}
export default aboutus;