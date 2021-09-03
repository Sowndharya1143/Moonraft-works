import React from 'react';

import classes from './Navigationitems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const Navigationitems = () =>(
    <ul className={classes.Navigationitems}>
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        <NavigationItem link="/orders" >Orders</NavigationItem>
        </ul>
)
export default Navigationitems;