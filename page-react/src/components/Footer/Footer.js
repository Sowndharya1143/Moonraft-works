import React,{Component} from 'react';
import scrollToY from 'window-scroll-to-animate'
import classes from './Footer.css';
class Footer extends Component{
    scrollTop(){
        scrollToY(0, 0,'easeInOutQuint');
    }
    render(){
        
    return(
        <section className={classes.FooterSection}>
            <div className={classes.FooterDiv}>
            <div className={classes.Address}>
            <h1>Address</h1>
            <h6>Address</h6>
            <p>Melbourne,south Brisbane, <br/>
                QLD 4101,Aurstralia.</p>
            <h6>Phone</h6>
            <span>+ 1 (234) 567 8901</span>
            <h6>Email</h6>
            <span>info@example.com</span>
            </div>
            <div className={classes.TwitterUS}>
            <h1>Twitter Us</h1>
            <ul>
                <li> <p>sit amet consectetur adipiscing<br/>
                    info@example.com</p>
                    <h6>Posted 3 days ago.</h6>
                </li>
                <li><p>sit amet consectetur adipiscing<br/>
                    info@example.com</p>
                    <h6>Posted 3 days ago.</h6>
                    </li>
            </ul>
            </div>
            <div className={classes.EmailBlog}>
            <h1>NewsLetter</h1>
            <input type="text" placeholder="Your Email"/>
            <button className={classes.EmailBtn}><span className="fa fa-envelope-o"></span></button>
            <p>vehicula velit sagittis vehicula. Duis posuere ex in mollis iaculis. Suspendisse tincidunt velit sagittis vehicula</p>
            </div>
           
            </div>
            <div className={classes.UpArrow}><span className="fa fa-arrow-up" onClick={() =>this.scrollTop()}></span></div>
            <div className={classes.FooterBottom}>
            <p>© 2019 Organic Store. All Rights Reserved | Design by <span>W3Layouts</span></p>
            </div>
            
        </section>
    );
    }
}
export default Footer;