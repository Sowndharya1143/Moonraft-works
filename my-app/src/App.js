import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={
    person :[
      {
        name:"mmain",age:9
      },
      {
        name:"ccase",age:8
      }
    ]
  }
  switchHandler = (namee) =>{
    this.setState({
      person:[{name:namee,age:99},{name:"llllll",age:99}]
    })
  }
 
  deleteHandler =(index) =>{
    const per = this.state.person
    per.splice(index,1)
    this.setState({person :per})
  }

  render() {
    let style = {
      backgroundColor:"green",
      border:"1px solid black",
      width:"100px",
      height:"40px"
    }
    let persons=(
      <div>{
      this.state.person.map((pers,index) =>{
      return <Person clicked ={() =>this.deleteHandler(index)} name={pers.name} age={pers.age}/>
    })}
    </div>
    );
  
    return (
      <div className="App">
       <h1>hai this is first react app</h1>
       <button style={style}>change</button>
       
     {persons}
       {/* <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
       <Person name={this.state.person[0].name} age={this.state.person[0].age}/> */}
    
    
      </div>
    );
  }
}

export default App;
