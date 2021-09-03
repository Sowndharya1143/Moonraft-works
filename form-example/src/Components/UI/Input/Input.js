import React ,{Component } from 'react';
import classes from './Input.css';
class Input extends Component{
    render(){
        let inputElement = null;
        switch(this.props.elementType){
            case('input'):
                inputElement=<input className={classes.Input} 
                {...this.props.elementConfig}
                value={this.props.value}
                onChange={this.props.changed}/>  
                break;
            case('radio'):
                inputElement = (
                        <div className={classes.Check}>
                            {this.props.elementConfig.options.map(option =>(
                            <label key={option.value}>   
                            <input 
                            value={this.props.value}
                            key={option.value}
                            {...option}
                            onChange={this.props.changed}/>{option.value}</label>
                           ))}
                        </div>
                )
                break;
            case('checkbox'):
                inputElement = (
                        <div className={classes.Check}>
                            {this.props.elementConfig.options.map(option =>(
                            <label key={option.name}>   
                            <input 
                            value={this.props.value}
                            key={option.value}
                            {...option}
                            onChange={this.props.changed}/>{option.name}</label>
                        ))}
                        </div>
                )
                break;
            case('select'):
                inputElement = (
                    <select className={classes.Dropdown}
                    value={this.props.value} 
                    onChange={this.props.changed}>
                        {this.props.elementConfig.options.map(option =>(   
                        <option 
                        key={option.value}
                        {...option}
                        >{option.displayname}</option>
                        
                    ))}
                    </select>
                )
                break;
            default:
                inputElement=<input className={classes.Input} 
                {...this.props.elementConfig}
                value={this.props.value}
                onChange={this.props.changed}/>  
                break;

        }
        return(
            <div>
                {inputElement}
            </div>
      
        );
    }
}
export default Input;