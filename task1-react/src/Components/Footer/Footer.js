import React ,{Component} from 'react';

import './Footer.css';
import Footer1 from './Footer1/Footer1';
import Footer2 from './Footer2/Footer2';
import Footer3 from './Footer3/Footer3';
class Footer extends Component{
    render(){
        return(
            <footer className="footer1">
                <Footer1/>
                <Footer2/>
                <Footer3/>
            </footer>
        );
    }
}
export default Footer;