import React ,{Component } from 'react';

import './Box.css';
import levelimg from '../../../assets/level.png';
import timeimg from '../../../assets/time.png';
class Box extends Component {
    render(){
        return(
            <li className="smallbox">
            <div className="boxheaddiv">
                <p className="boxheading ">Probationary
                    <br/> Officer/ Junior Officer
                </p>
                <p className="subheadingbox ">ENGINEERING</p>
                <p className="lastlinebox ">Purchased by 540</p>
            </div>
            <div className="boxfooter">
                <p className="basicclass ">
                    <img  src={levelimg} alt="error"/>Basic</p>
                <p className="timeclass">
                    <img  src={timeimg} alt="error"/>45 mins</p>
            </div>
        </li> 
        );
    }
}

export default Box;