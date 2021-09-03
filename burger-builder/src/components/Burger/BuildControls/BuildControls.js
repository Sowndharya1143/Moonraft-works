import React from 'react';
import classes from './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';
const control =[
    {label : "Salad", type : "salad"},
    {label : "Bacon" , type : "bacon"} ,
    {label : "Cheese" , type :"cheese"},
    {label : "Meat" , type : "meat"}
]
const BuildControls = (props) =>
   (
        <div className={classes.BuildControls} >
        <p>CURRENT PRICE : <strong>{props.price.toFixed(2)}</strong></p>
            {control.map(ctrl =>(
                <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added ={() =>props.ingredientAdded(ctrl.type)}
                removed = {() => props.ingredientRemoved(ctrl.type)}
                disabled ={props.disabled[ctrl.type]} />
            ))}
            <button 
            disabled = {!props.purchasable} 
            className = {classes.OrderButton}
            onClick = {props.clickedOrder}>
            ORDER NOW </button>
        </div>
    );

export default BuildControls;