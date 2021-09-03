import React,{Component} from 'react'
import classes from './Footer.css';
class Footer extends Component{
    render(){
        return(
            <footer className={classes.Footer}>
            <a href="sfd#" className={classes.button}><i className="fas fa-arrow-up">&nbsp;</i> &nbsp;To the Top</a>
            <p className={classes.Poweredby}>Powered by &nbsp;<a  href="tt2" className={classes.ahref}>w3css</a></p>
            </footer>
        );
    }
}
export default Footer;