import React,{Component} from 'react';
import classes from '../Banner/Banner.css';
import BannerText from '../BannerText/BannerText';
class banner extends Component{
    state ={
        visible:false,
        width:window.innerWidth
    };
    Menuhandler = () =>{
            const visibility = this.state.visible;
            this.setState({visible : !visibility,width : window.innerWidth})
    }
    render(){
        
    return(
        <div className={classes.banner}>
        <header>
             <div className={classes.Header}>
                <div className={classes.LogoParent}>
                    <h1 className={classes.Logo}>OS</h1>
                    <h6>Organic <br/> Store</h6>
                </div>
                <div className={classes.MobileMenu}>
                    <button className={classes.Menubtn} value="Menu" onClick={this.Menuhandler}>Menu</button>
                </div>
                <ul style={{ display: this.state.visible ? "block" : "none" }} className={classes.Menu}>
                <li><a href="#home">Home</a></li>
                <li><a href="#Aboutus">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contactus">Contact Us</a></li>
                </ul>
            </div>
            </header>
            <BannerText/>
        </div>
    );
    }
}
export default banner;