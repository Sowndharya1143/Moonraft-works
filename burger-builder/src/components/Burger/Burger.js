import React from 'react';
import classes from '../Burger/Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let transformedIngrdient = Object.keys(props.ingredients)
    .map(igKey  => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el);
    },[]);
   if(transformedIngrdient.length === 0){
       transformedIngrdient = <p>PLEASE ADD SOME INGREDIENTS </p>;
   }

    return(
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngrdient}
        <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default Burger;