import React, {Component} from 'react';

import classes from  './HeaderFirstpart.css';
import Centerbuttons from './Centerbuttons/Centerbuttons';
class HeaderFirstPart extends Component{
    openNav = () =>{
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav = () =>{
        document.getElementById("mySidenav").style.width = "0px";
    }
    popup = () =>{
        document.getElementById("myPopup").style.visibility="visible";
        //popup.classList.toggle({classes.show});
    }
    popremove = () =>{
        document.getElementById("myPopup").style.visibility="hidden";
    }
    render(){
    return (
        <div className = {classes.Headerfirst}>
                <div className={classes.qualisicon}>
                    <span  className={classes.menuicon} id='menuid' onClick={this.openNav} ><i className='material-icons' >menu</i></span>
                    <div  className={classes.sidenav} id="mySidenav">
                            <a href="javascript:void(0)" className={classes.closebtn} onClick={this.closeNav}>&times;</a> 
                            <a href="/">About</a>
                            <a href="/">Services</a>
                            <a href="/">Clients</a>
                            <a href="/">Contact</a>
                          </div>
                    <p className={classes.qualisclass}>QUALIS</p>
                </div>
                    <Centerbuttons/>
                <div>
                <i className="fa fa-user-circle"  id={classes.contactclass} onClick={this.popup}  ></i>
                        <span className={classes.popuptext} id="myPopup" onMouseLeave={this.popremove}>Hi Hello User<br/>Login</span>
                </div>
        </div>


    );
    }
}
export default HeaderFirstPart;