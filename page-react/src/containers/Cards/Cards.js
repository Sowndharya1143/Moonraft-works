import React,{Component} from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import classes from './Cards.css';
// import img1 from "../../images/ab1.jpg";
// import img2 from "../../images/ab2.jpg";
// import img3 from "../../images/ab3.jpg";
// import img4 from "../../images/ab4.jpg";
class Cards extends Component{
    state ={
        cards :[
            {id:1,image : "ab1.jpg", name: "Vegatables" ,desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
            {id:2,image : "ab2.jpg", name : "Fresh Fruits" , desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
            {id:3,image : "ab3.jpg", name : "Garden Tillage", desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
            {id:4,image : "ab4.jpg", name : "Awesome Wheats", desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
            {id:5,image : "ab1.jpg", name : "Garden Tillage", desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"},
            {id:6,image : "ab2.jpg", name : "Agro Machinery", desc:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit"}
        ]
    }
    render(){
        var temp = this.state.cards.map(card =>{
            return <ServiceCard key = {card.id} image={card.image} name={card.name} desc={card.desc}/>
        });
       
    return(
        
        <div className={classes.Cards}>
            {temp}
        </div>
    );
    }
}
export default Cards;