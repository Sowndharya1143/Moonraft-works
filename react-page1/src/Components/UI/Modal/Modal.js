import React from 'react'
import classes from  './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
const Modal =(props) =>{
    return(
        <div>
            <BackDrop show={props.show} clicked={props.clicked}/>
        <div className={classes.Modal} 
        style={{transform:props.show 
            ? 'translateY(0)' : 'translateY(-100vh)',
            opacity:props.show ?'1':'0'}}>
        <h4 className={classes.h4}>SUBSCRIBE
        <span className={classes.close} onClick={props.clicked}><i className="fa fa-times" aria-hidden="true"></i></span></h4>
        <p className={classes.desc}>Join my mailing list to receive updates on the latest blog posts and other things.</p>
        <input type="text" placeholder="Enter e-mail" className={classes.textBox}/>
        <input type="submit" value="Subscribe" className={classes.button} onClick={props.clicked}/>
        
        </div>
        </div>
    );
}
export default Modal;