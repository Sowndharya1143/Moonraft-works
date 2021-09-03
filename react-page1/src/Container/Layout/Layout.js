import React, { Component } from 'react';
import classes from './Layout.css';
import Navigation from '../../Components/Navigation/Navigation';
import Header from '../../Components/Header/Header';
import Content from '../Content/Content';
import Footer from '../../Container/Footer/Footer';
class Layout extends Component{
    state={
        icons :[
            {id:"fsdf" , classname :"fa fa-facebook-official"},
            {id:"Dfss" , classname :"fa fa-instagram"},
            {id:"hdfhd" , classname : "fa fa-snapchat"},
            {id:"dfs" , classname : "fa fa-flickr"},
            {id:"dfsdfs" , classname : "fa fa-twitter"},
            {id:"rrr" , classname : "fa fa-linkedin"}
        ]
    }
    render(){
        return(
            <div className={classes.Layout}>
            <Navigation icons={this.state.icons}/>
            <Header/>
            <Content icons={this.state.icons}/>
            <Footer/>
            </div>
        );
    }
}

export default Layout;