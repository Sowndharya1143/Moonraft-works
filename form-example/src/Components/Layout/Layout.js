import React , {Component } from 'react';
import classes from './Layout.css';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
class Layout extends Component{
    state ={
        formDetails :{
            name:{
                elementType:'input',
                elementConfig :{
                    type:'text',
                    placeholder:'NAME'
                },
                value:'',
                valid:false
            }
            ,
            city:{
                elementType:'input',
                elementConfig :{
                    type:'text',
                    placeholder:'CITY'
                },
                value:'',
                valid:false
            },
            street:{
                elementType:'input',
                elementConfig :{
                    type:'text',
                    placeholder:'STREET'
                },
                value:'',
                valid:false
            },
            types:{
                elementType:'select',
                elementConfig :{
                    options:[
                        {value:'AC',displayname:"AC"},
                        {value:'NON AC',displayname:"NON AC"}
                    ]
                },
                value:'',
                valid:false
            },
            gender:{
                elementType:'radio',
                elementConfig :{
                    options:[
                        {name:'gender',value:'MALE',type:'radio'},
                        {name:'gender',value:'FEMALE',type:'radio'}

                    ]
                },
                value:'',
                valid:false
            },
            vehicle:{
                elementType:'checkbox',
                elementConfig :{
                    options:[
                        {name:'BIKE',type:'checkbox',value:'BIKE'},
                        {name:'CAR',type:'checkbox',value:'CAR'}

                    ]
                },
                value:'',
                valid:false
            }
        }
    }
    changedHandler = (event,identifier) =>{
        const updatedFormDetails ={
            ...this.state.formDetails
        }
        const updatedFormElement ={
            ...this.state.formDetails[identifier]
        }
        updatedFormElement.value=event.target.value;
        updatedFormDetails[identifier] = updatedFormElement
        this.setState({formDetails:updatedFormDetails})
        console.log(updatedFormElement);
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(event.target.value)
    }
    render(){
        const formArray = [];
        for(let element in this.state.formDetails){
            formArray.push({
                id:element,
                config : this.state.formDetails[element]
            })
        }
        console.log(formArray)
        let form =(
            <form onSubmit={this.submitHandler}>
        {formArray.map(ele => (
            <Input key={ele.id} 
            elementType={ele.config.elementType}
            value={ele.config.value}
            elementConfig={ele.config.elementConfig} 
            changed={(event)=>this.changedHandler(event,ele.id)}/>
         ))}
         <Button/>
    </form>);
        return(
            <div className={classes.Layout}>
                <h3>CONTACT DATA</h3>
               {form}
            </div>
        );
        
    }
}
export default Layout;