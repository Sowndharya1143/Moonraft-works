import React from 'react';

import classes from './Centerbuttons.css';
const Centerbuttons = () =>{
    return(
        <div className={classes.headerCenterList} id="opt-rectangle">
            <button className={classes.Rectangle1} >
                <span className={classes.fileIcon} ><i className="fa fa-sticky-note"></i></span>BROWSE</button>
            <button className={classes.Rectangle2} >
                <span className={classes.starIcon} ><i className="fa fa-star"></i></span>FAVORITES</button>
            <button className={classes.Rectangle3} >
                <span className={classes.plusIcon} ><i className="fa fa-plus-circle "></i></span>CREATE</button>
        </div>
    );
}
export default Centerbuttons;