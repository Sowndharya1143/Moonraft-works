import React,{Component} from 'react'
import List from '../../components/ListSection/List/List';
class ListCollections extends Component {
    state ={
        Lists :[
            {id:1,amount:"3.50", title:"BeetRoot", desc:"consectetuer adip sit amet" ,image:"v1.jpg"},
            {id:2,amount:"2.75", title:"Tomato", desc:"consectetuer adip sit amet" ,image:"v2.jpg"},
            {id:3,amount:"5.20", title:"Carrot", desc:"consectetuer adip sit amet" ,image:"v3.jpg"},
            {id:4,amount:"3.00", title:"Berries", desc:"consectetuer adip sit amet" ,image:"v4.jpg"}
        ]
    }
    render(){
        var template = this.state.Lists.map(ListElement =>{
            return  <List key = {ListElement.id} amount={ListElement.amount} desc={ListElement.desc} title={ListElement.title} image={ListElement.image}/>
           
        });
        return(
            <React.Fragment>
                {template}
            </React.Fragment>
            
        );
    }
}
export default ListCollections;