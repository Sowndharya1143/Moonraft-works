import React from 'react';

import classes from './BoxSection.css';
//import Box from './Box/Box';
import Renderingdata from '../BoxSection/Renderingdata';
const BoxSection = () =>{
   return(
    <section className={classes.mainContainer}>
    <div className={classes.containerWidth}>
        <div className={classes.viewIconSection}>
            <span className={classes.viewIconClass}><i className="material-icons" id="toggle"  >view_module</i></span>
            <p className={classes.viewText}>BASED ON LAST FEW JOBS YOU CREATED</p>
        </div>
        <div className={classes.iconBox}>
                <span className={classes.viewListIcon}><i className="material-icons" id="content" >view_list</i></span>
                <ul className={classes.clearfix}>
                <Renderingdata/>
                </ul>
        </div>
    </div>
    </section>
   );
}

export default BoxSection;