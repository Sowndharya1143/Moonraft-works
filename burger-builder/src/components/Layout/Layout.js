import React ,{Component} from 'react';
import Aux from '../../hoc/Aux';
import classes from '../Layout/Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  state ={
    SideDrawerState :false
  }
  SideDrawerCloserHandler = () =>{
    this.setState({SideDrawerState :false})
  }
  SideDrawerToggleHandler = () =>{
    this.setState((prevState) =>{
        return {SideDrawerState : !prevState.SideDrawerState}
    });
  }
  render(){
    return(
      <Aux>
      <Toolbar menuclicked={this.SideDrawerToggleHandler} />
      <SideDrawer 
      closed={this.SideDrawerCloserHandler}
      open={this.state.SideDrawerState}/>
      <main className={classes.ContentClass}>
      {this.props.children} 
          </main>
          </Aux>
    )
  }
}
export default Layout;