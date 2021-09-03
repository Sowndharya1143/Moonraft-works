import React ,{Component}from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from './BannerImage.css';
class BannerImage extends Component {
    state={
        displaymodal :false
    }
    ChangeHandler=()=>{
        this.setState({displaymodal : true});
    }
    ChangeCloseHandler=()=>{
        this.setState({displaymodal:false});
    }
    render(){
    return(
        <div className={classes.bgClass}>
        
        <div className={classes.textSection}>
        <Modal show={this.state.displaymodal} clicked={this.ChangeCloseHandler}/>
        <h1 className={classes.h1}>Jane's</h1>
        
        <h1 className={classes.fashionBlog}><b>FASHION BLOG</b></h1>
        <h6><button className={classes.button} onClick={this.ChangeHandler}>SUBSCRIBE</button></h6>
        
        </div>
        </div>
    );
}
}
export default BannerImage;