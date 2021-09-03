import React from 'react';
import Header from '../Header/Header';
import AboutUs from '../AboutUs/Aboutus';
import StoreInfo from '../StoreInfo/StoreInfo';
import Service from '../Service/Service';
import ListSection from '../ListSection/ListSection';
import Gallery from '../../components/Gallery/Gallery';
import Blog from '../../containers/Blog/Blog';
import ContactUs from '../../containers/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import MapSection from '../../containers/GMaps/Map';
const layout =(props)=>(
    <React.Fragment>
        <Header/>
        <AboutUs/>
        <StoreInfo/>
        <Service/>
        <ListSection/>
        <Gallery/>
        <Blog/>
        <MapSection/>
        <ContactUs/>
        <Footer/>
    </React.Fragment>
)
export default layout;