import React from 'react';

import fb from '../../../assets/fb.png';
import twitter from '../../../assets/twitter.png';
import linkedin from '../../../assets/linkedin.png';
import google from '../../../assets/google.png';
import './Footer1.css';
const Footer1 = () =>{
    return (
                <div className="footerchild">
                    <div className="socialappimage">
                    <img className="appimage1" src={fb} alt="error"/>
                    <img className="appimage2" src={twitter} alt="error"/>
                    <img className="appimage3" src={linkedin} alt="error"/>
                    <img className="appimage4" src={google} alt="error"/>
                </div>
                <div className="copyrightdiv">
                    <p>Copyright @ 2017 MeritTrac</p>
                </div>
                </div>
    );
}
export default Footer1;