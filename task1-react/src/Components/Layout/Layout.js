import React, { Component} from 'react';

import './Layout.css';
import Header from '../Header/Header';
import Content from '../Content/Content';
import MainSection from '../MainSection/MainSection';
import Aux from '../../hoc/Aux';
import AboveFooter from '../AboveFooter/AboveFooter';
import Footer from '../Footer/Footer';
class Layout extends Component{
render(){
    return (
        <Aux>
        <div className="headersection">
        <div className="default">
            <Header/>
            <Content/>
            
        </div>
        </div>
            <div className="default">
            <MainSection/>
            <AboveFooter/>
        </div>
        <div className="footersection">
        <Footer/>
        </div>
    </Aux>
    );
}
}
export default Layout;