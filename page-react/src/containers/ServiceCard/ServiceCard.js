import React,{Component} from 'react';

import classes from './ServiceCard.css';

class ServiceCard extends Component{
    render(){
        return(
            <div className={classes.Card}>
                <img src= {require("../../images/" + this.props.image)} alt="sry"/>
                <h4>{this.props.name}</h4>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}
export default ServiceCard;