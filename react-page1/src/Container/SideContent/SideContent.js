import React,{Component} from 'react';
import classes from './SideContent.css';
import NameBlog from "../../Components/NameBlog/NameBlog";
import Posts from "../../Components/Posts/Posts";
import img21 from "../../assets/avatar_smoke.jpg";
import img22 from "../../assets/bandmember.jpg";
import img23 from "../../assets/workshop.jpg";
import img24 from "../../assets/avatar_smoke (1).jpg";
import Advertise from "../../Components/Advertise/Advertise";
import Tags from "../../Components/Tags/Tags";
import Inspiration from '../../Components/Inspiration/Inspiration';
import FollowMe from '../../Components/FollowMe/FollowMe';
import Subscribe from '../../Components/Subscribe/Subscribe';
class SideContent extends Component {
    state = {
        posts :[
            {id:"rr" , img :img21 , name:"Denim" , desc :"Sed mattis nunc"},
            {id:"ee" , img :img22 , name:"Sweaters" , desc :"Praes tinci sed"},
            {id:"pp" , img :img23 , name:"Workshop " , desc : "Ultricies congue"},
            {id:"ww" ,img :img24 , name : "Trends " , desc :"Lorem ipsum dipsum"}
        ],
        Tags :[
            {id:"1" , val : "Fashion"},{id:"2" , val:"New York"},{id:"3", val:"London"},{id:"4",val:"Hats"},{id:"5",val:"Norway"},
            {id:"6" , val : "Sweaters"}, {id:"7", val:"Ideas"},{id:"8",val:"Deals"},{id:"9",val:"Accessories"},{id:"10",val:"News"},
            {id:"11",val:"Clothing"},{id:"12",val:"Shopping"},{id:"13",val:" Jeans"},{id:"14",val:"Trends"}
        ]
    }
    render(){
        return(
            <div className={classes.SideContent}>
                <NameBlog/>
                <Posts posts={this.state.posts}/>
                <Advertise/>
                <Tags Tags={this.state.Tags}/>
                <Inspiration/>
                <FollowMe icons={this.props.icons}/>
                <Subscribe/>
            </div>
        );
    }
}
export default SideContent;