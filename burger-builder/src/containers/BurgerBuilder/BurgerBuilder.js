import React , { Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Model/Model';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
const INGREDIENTS_PRICE ={
    salad : 2,
    cheese : 2,
    meat : 4,
    bacon : 3

}
class BurgerBuilder extends Component {
    state ={
        ingredients :{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0

        },
        totalPrice : 4,
        purchasable:false,
        purchasing : false,
        loading : false
    }
    purchaseHandler = () =>{
        this.setState({purchasing :true})
    }
    updatePurchasableState (ingredients){
      
        const sum =Object.keys(ingredients)
        .map( igkey => {
            return ingredients[igkey]
        })
        .reduce((sum,el) =>{
            return sum + el;
        },0)
        this.setState({purchasable : sum >0})
    }
    addIngredientHandler = (type) =>{
        const oldCount=this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients ={...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const newPrice = INGREDIENTS_PRICE[type] + this.state.totalPrice;
        this.setState({totalPrice : newPrice , ingredients : updatedIngredients})
        this.updatePurchasableState(updatedIngredients);
    }
    removeIngredientHandler = (type) =>{
        const oldCount=this.state.ingredients[type];
        if(oldCount <= 0){
            return ;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients ={...this.state.ingredients}
        updatedIngredients[type] = updatedCount;
        const newPrice = this.state.totalPrice- INGREDIENTS_PRICE[type];
        this.setState({totalPrice : newPrice , ingredients : updatedIngredients})
        this.updatePurchasableState(updatedIngredients);
    }

    purchaseCancelHandler = () =>{
        this.setState({purchasing : false})
    }
    purchaseContinueHandler = () =>{
       // alert('hai');
    const queryparams =[];
    for(let i in this.state.ingredients){
        queryparams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
    }
    queryparams.push('price=' +this.state.totalPrice);
    const queryString =queryparams.join('&');
    this.props.history.push({
        pathname:'/checkout',
        search:'?' + queryString
    });
    }
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0; 
        }
        let orderSummary = <OrderSummary ingredients={this.state.ingredients} 
        price={this.state.totalPrice}
        clickedCancel= {this.purchaseCancelHandler}
        clickedContinue ={this.purchaseContinueHandler}
        />
        if(this.state.loading){
                orderSummary =<Spinner />
        } 
       return(
            <Aux>
                   
                 <Model show ={this.state.purchasing} clicked={this.purchaseCancelHandler}>
                {orderSummary}
                </Model> 
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded ={this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                purchasable = {this.state.purchasable}
                clickedOrder ={this.purchaseHandler}
                price = {this.state.totalPrice}/>
            </Aux>
        );
    }
}
export default BurgerBuilder;