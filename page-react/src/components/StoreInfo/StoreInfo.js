import React from 'react';
import classes from './StoreInfo.css';
import img3 from "../../images/bb3.jpg";
import Button from '../../containers/Button/Button';
const storeInfo = (props) =>{
    var bg={
        background:"#ececec"
    }
    return(
        <section style={bg}>
        <div className={classes.StoreInfo}>
        <div className={classes.StoreContent}>
            <h4 className={classes.RedHeading}>Store Information</h4>
            <h6 className={classes.Year}>Since:1974</h6>
            <p>delectus reiciendis maiores alias consequatur aut.maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod delectus reiciendis maiores alias consequatur aut.maiores alias Lorem ipsum dolor sit amet, consectetur delectus reiciendis maiores alias consequatur aut.maiores alias Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod delectus reiciendis maiores alias consequatur aut.maiores alias Lorem ipsum dolor sit amet, consectetur</p>
            <Button value="Read More"></Button>
        </div>
            <img src={img3} alt="*sry"/>
        </div>
        </section>
    );
}
export default storeInfo;