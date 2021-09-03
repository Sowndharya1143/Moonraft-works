import React,{Component} from 'react';
import classes from './ContactForm.css';
import Input from '../../../components/UI/Input/Input';
class ContactForm extends Component{
    state ={
        controls:{
            fname:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"First Name"
                },
                value:'',
                validation:true,
                valid:false
            },
            lname:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Last Name"
                },
                value:'',
                validation:true,
                valid:false
            },
            phone:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:"Phone Number"
                },
                value:'',
                validation:true,
                valid:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:"Email ID"
                },
                value:'',
                validation:true,
                valid:false
            },
            message:{
                elementType:'textarea',
                elementConfig:{
                    type:'textarea',
                    placeholder:"Message"
                },
                value:'',
                validation:true,
                valid:false
            }
        },
        formValid:false
    }
    CheckValid = (updatedControl) =>{
        if(updatedControl.elementType === "input"){
            console.log(updatedControl.value);
            if(updatedControl.value !==""){
                return true;
            }
        }
        else if (updatedControl.elementType === "textarea"){
            if(updatedControl.value !== ""){
                return true;
            }
        }
        return false;
    }
    ChangeHandler = (event,id) =>{
        const updatedControls ={...this.state.controls};
        const updatedControl = {...updatedControls[id]};
        updatedControl.value = event.target.value;
        updatedControl.valid = this.CheckValid(updatedControl);
        updatedControls[id]=updatedControl;
        let formValid = true;
        for(let field in updatedControls){
            formValid = updatedControls[field].valid && formValid;
        }
        this.setState({ controls : updatedControls, formValid : formValid });
        console.log(formValid);

    }
    render(){
        const formElementArray =[];
        for(let key in this.state.controls){
            formElementArray.push({
                id:key,
                config:this.state.controls[key]
            })
        }
        const form = formElementArray.map(formElement =>{
            return(
            <Input 
                   key={formElement.id}
                   elementType={formElement.config.elementType}
                   elementConfig={formElement.config.elementConfig}
                   invalid={formElement.config.valid}
                   value={formElement.config.value}
                   ChangeValue={(event) => this.ChangeHandler(event,formElement.id)}
                   />
            )
        })
        return(
            <div className={classes.Form}>
                {form}
                <button type="submit" className={classes.SendBtn} 
                style={{backgroundColor : this.state.formValid ? "#c50e1f" :"#000000"}}>Send</button>
            </div>

        );
    }
}
export default ContactForm;