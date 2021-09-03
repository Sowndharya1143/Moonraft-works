import React from 'react';

import classes from './Service.css';
import Cards from '../../containers/Cards/Cards';
import ScrollableAnchor from 'react-scrollable-anchor';
const service =(props) =>{
    return(
        <ScrollableAnchor id={"services"}>
        <section className={classes.Service}>
        <h1>Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
        tempor incididunt ut labore et Lorem ipsum</p>
        <Cards/>
        </section>
        </ScrollableAnchor>
    );
}
export default service;