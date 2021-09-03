import React from 'react';
import classes from './Header.css';
import BannerImage from './BannerImage/BannerImage';
const Header =(props)=>{
    return(
        <header>
        <div className={classes.title}>
            <h1 className={classes.h1}><b>JANE BLOGLIFE</b></h1>
            <h6 className={classes.h6}>Welcome to the blog of <span className={classes.blockColor}>Jane's world</span></h6>    
        </div>
        <BannerImage />
        </header>
    );
}
export default Header;