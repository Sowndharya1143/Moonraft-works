import React,{Component} from 'react';


import classes from './Box.css';
import Pop from '../Box/Pop';
class Box extends Component{
    openpop = () =>{
        console.log("hai")
        return(
        <Pop />
    );      
    }
    render(props){
    return(

    <li className={classes.boxClass} onClick ={this.openpop}>
        <div>
        <span className={classes.starIconBox}><i className="material-icons ">star_border</i></span>
        </div>
        <div>
        <p className={classes.financeClass}>FINANCE</p>
        </div>
         <p className={classes.title}>{this.props.title}</p>
        <div className={classes.targetClass}>
            <p className={classes.ericson}>{this.props.sourceSystem}</p>
            <hr className={classes.line}/>
            <p className={classes.hiveHadoop}>{this.props.targetSystem}</p>
        </div>
        <div className={classes.boxLine1Class}>
            <p className={classes.number}>{this.props.pipelineno}</p>
            <p className={classes.date}>{this.props.date}</p>
        </div>
        <div className={classes.boxLine1Class}>
            <p className={classes.typeClass}>{this.props.type}</p>
            <p className={classes.typeClass}>{this.props.time}</p>
        </div>
        <div className={classes.boxLine1Class}>
            <p className={classes.typeClass}>{this.props.owner}</p>
            <p className={classes.barClass}></p>
        </div> 
      </li>  
      
   
 );}
}

export default Box;