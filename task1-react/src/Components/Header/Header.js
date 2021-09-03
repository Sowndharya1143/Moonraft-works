import React, {Component}  from 'react';
import logo from '../../assets/page-1.png';
import Aux from '../../hoc/Aux';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <Aux>
            <div className="default">
            <header>
                <img className="logoimage" src={logo} alt="error"/>
                <button className="loginbutton">LOGIN</button>
            </header>
            <div className="headingsection">
                    <h4 className="heading">Welcome to MeritTrac</h4>
                    <div className="subheading">
                        <p>The testing & assessment company</p>
                    </div>
                </div>
            </div>
            </Aux>
        );
    }
}
export default Header;