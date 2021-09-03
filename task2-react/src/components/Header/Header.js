import React from 'react';

import classes from './Header.css';
import HeaderFirstPart from '../Header/HeaderFirstPart/HeaderFirstPart';
import HeaderButtonCall from '../Header/HeaderButtonCall';
const header = () =>{
    const datas = {id:1,arr:["RECOMMENDED","FINANCE","MARKETING","SALES","CLOUD","...."]};
    return ( 
    <div className={classes.headpart}>
    <HeaderFirstPart/>
                <div className={classes.navoption} id="navoption_id">
               <HeaderButtonCall data={datas}/>
                </div>
        <div className={classes.searchFilterSection}>
                    <div className={classes.searchSection}>
                        <input type="text" placeholder="SEARCH" className={classes.searchBox}/>
                        <span className={classes.searchIcon}><i className="fa fa-search"></i></span>
                    </div>
                    <div>
                        <span className={classes.filterIcon}><i className="material-icons" id="filter-id" > filter_list</i></span>
                        <p className={classes.filterText}>FILTER</p>
                    </div>
        </div>
    </div>);
}

export default header;