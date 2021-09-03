import React,{Component} from 'react';
import MainContent from '../MainContent/MainContent';
import classes from './Content.css';
import SideContent from '../SideContent/SideContent';
class Content extends Component {
    
    render(){
        return(
            <div className={classes.content}>
            <MainContent/>
            <SideContent icons={this.props.icons}/>
            </div>
        );
    }
}
export default Content;