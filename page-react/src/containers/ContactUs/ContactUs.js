import React,{Component} from 'react';

import classes from "./ContactUs.css";
import ContactForm from './ContactForm/ContactForm';
import ScrollableAnchor from 'react-scrollable-anchor'
class ContactUs extends Component{
    render(){
        return(
            <ScrollableAnchor id={"contactus"}>
            <section className={classes.ContactUs}>
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
            tempor incididunt ut labore et Lorem ipsum</p>
            <ContactForm/>
            </section>
            </ScrollableAnchor>
        );
    }
}
export default ContactUs;