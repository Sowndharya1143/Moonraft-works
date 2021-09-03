import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
const OrderSummary = (props) => {
    const ingredientsSummary =Object.keys(props.ingredients)
    .map(igkey =>{
        return <li key={igkey}><span style ={{ textTransform : 'capitalize'}}> {igkey} </span>:{props.ingredients[igkey]}</li>
    });
return ( 
    <Aux>
        <h3>YOUR ORDER </h3>
        <p> A delicious burger with following ingredients : </p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>TOTAL PRICE : {props.price.toFixed(2)}</strong></p>
        <p> Continue to Checkout ? </p>
        <Button btnTypes="Danger"
        clickedmodal={props.clickedCancel} 
        >CANCEL </Button>
        <Button btnTypes="Success" 
        clickedmodal = {props.clickedContinue}
        >CONTINUE</Button>
    </Aux>
)
}

export default OrderSummary;