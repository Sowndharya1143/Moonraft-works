import React,{Component} from 'react';
import classes from './Button.css';

class Button extends Component{
    render(){
        return(
            <button className={classes.ReadMoreBtn}>{this.props.value}</button>
        );
    }
}
export default Button;