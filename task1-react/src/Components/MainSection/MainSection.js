import React ,{Component} from 'react';

import './MainSection.css';
import SearchContainer from '../MainSection/SearchContainer/SearchContainer';
import CombineBox from './Box/CombineBox';
class MainSection extends Component{
    render(){
        return(
            <div className="mainsection">
            <SearchContainer/>
            <CombineBox/>
            </div>
        );
    }
}
export default MainSection;