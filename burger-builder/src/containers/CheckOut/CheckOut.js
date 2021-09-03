import React ,{ Component} from 'react';
import {Route} from 'react-router-dom';
import ContactData from '../../containers/CheckOut/ContactData/ContactData';
import CheckOutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class CheckOut extends Component {
    state ={
        ingredients : null,
        totalPrice :0
    }
    componentWillMount (){
        const query =new URLSearchParams(this.props.location.search);
        const ingredient ={};
        let price = 0;
        for(let params of query.entries()){
            if(params[0] === 'price'){
                price = params[1];
            }
            else{
                ingredient[params[0]] = +params[1];
            }
            
        }
        this.setState({ingredients:ingredient , totalPrice :price});
    }
    checkoutCancelledHandler =() =>{
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
        render(){
            return(
                <div>
                    <CheckOutSummary 
                    ingredients={this.state.ingredients}    
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                    <Route path={this.props.match.path + '/contact-data'} 
                    render ={(props) =>(<ContactData ingredients= {this.state.ingredients} price={this.state.totalPrice} {...props}/>)}
                    />
                    </div>
            )
        }

}
export default CheckOut;