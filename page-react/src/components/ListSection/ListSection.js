import React from "react";
import img00 from '../../images/bb4.jpg';
import classes from './ListSection.css';
import ListCollections from '../../containers/ListCollections/ListCollections';
const listSection =(props) =>{
    return(
        <section className={classes.ListSection}>
        <div className={classes.ListMargin}>
        <img src={img00} className={classes.FirstImage} alt="sry"/>
        <div className={classes.RightList}>
        <ListCollections/>
        </div>
        </div>
        </section>
    );
}
export default listSection;