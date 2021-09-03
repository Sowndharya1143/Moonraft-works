import React,{Component } from 'react';
import NavigationIcons from './NavigationIcons/NavigationIcons';
import classes from './Navigation.css';
class Navigation extends Component{
     
    render(){
        const icon=this.props.icons.map((icon) => 
        <NavigationIcons key = {icon.id} icons={icon.classname}/>
    )
    return(
    <div className={classes.clearfix}>
    {icon}
    <a href="#k" className={classes.Icons} ><i className="fa fa-search"/></a>
    </div>
        
    );
}
}
export default Navigation;