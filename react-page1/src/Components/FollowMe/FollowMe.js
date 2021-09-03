import React from 'react';
import classes from './FollowMe.css';
import Icon from './Icon/Icon';
const FollowMe = (props)=>{
    var value=props.icons.map((icon)=>{
        return <Icon key={icon.id} iconvalue={icon.classname}/>
    })
    return(
        <div className={classes.FollowMe}>
        <h4 className={classes.h4}>Follow Me </h4>
        <div className={classes.iconsection}>
        {value}
        </div>
        </div>
    );
}
export default FollowMe;