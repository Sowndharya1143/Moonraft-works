import React, {Component} from 'react';

import cross from '../../../assets/group-10.png';
import filter from '../../../assets/filter.png';
import './SearchContainer.css';
class SearchContainer extends Component {

    render(){
        return(
            <div className="search-container ">
                    <div className="main ">
                        <div className="maincontent1">
                            <p>Search Results</p>
                        </div>
                        <div className="sortby">
                            <div className="maincontent2">
                                <p>Sort by:</p>
                            </div>
                            <div>
                                <select className="maincontent3">
                                    <option value="Popularity">Popularity</option>
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="filter-cancel-container ">
                        <div>
                            <div className="cancelcircle">
                                <img src={cross} alt="error"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Science and Engineering" className="sciencetext" />
                            </div>
                            <hr className="line"/>
                        </div>
                        <div className="filtercircle">
                            <img src={filter} alt="error"/>
                        </div>

                    </div>
                </div>
        );
    }
}
export default SearchContainer;