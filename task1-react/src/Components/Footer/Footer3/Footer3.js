import React from 'react';

import mail from '../../../assets/mail.png';
import shape from '../../../assets/shape.png';
import './Footer3.css';
const Footer3 = () =>{
    return(
        <div className="footerchild">
                    <p className="headquaterclass">CONTACT US</p>
                    <div className="mailclass">
                        <img className="mailstyle" src={mail} alt="error"/> info@merittrac.com</div>
                    <span className="contactclass">
                        <img src={shape} alt="error"/> +91 80718 19100</span>
                </div>
    );
}
export default Footer3;