import React from 'react';
import "./person.css"
const Person = (props) => {
    return (<div className="person">
        <p> hai I am from person folder </p>
        
        <p onClick ={props.clicked}>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.children}</p>
        </div>);

} 
export default Person;