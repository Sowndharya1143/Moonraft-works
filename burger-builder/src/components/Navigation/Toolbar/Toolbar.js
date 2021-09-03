import React from 'react';
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToogle/DrawerToggle'
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
    <DrawerToggle menuclicked={props.menuclicked}/>
    <div className={classes.Logo}>
    <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
    <Navigationitems />
    </nav>
    </header>
)
export default Toolbar;