import React from 'react';

//import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Header from '../Header/Header';
import BoxSection from '../BoxSection/BoxSection';


const layout = () =>(
    <div>
    <div className = {classes.headsection}>
     <Header/>
     </div>
    <BoxSection/>
    </div>
    
);

export default layout;