import React, {Component} from 'react';

import accenture from '../../../assets/accenture.png';
import hdfc from '../../../assets/hdfc.png';
import tata from '../../../assets/tata.png';
import ibm from '../../../assets/ibm.png';
import infosys from '../../../assets/infosys.png';
import deloitte from '../../../assets/deloitte.png';
import './ImageSection.css';
class ImageSection extends Component {
    render(){
        return(
            
            <div className="imgsection">

            <img className="companylogo" src={accenture} alt="error"/>
            <img className="companylogo" src={hdfc} alt="error"/>
            <img className="companylogo" src={tata} alt="error"/>
            <img className="companylogo" src={ibm} alt="error"/>
            <img className="companylogo" src={infosys} alt="error"/>
            <img className="companylogo" src={deloitte} alt="error"/>



        </div>
        );
    }
}
export default ImageSection;