import React, {Component} from 'react';


import './Content.css';
class Content extends Component {
    render()
    {
        return(
            <div>
            <div className="footerhex">
                    <div id="hex4" className="hexagon-wrapper">
                        <div id="color4" className="hexagon"></div>
                    </div>
         </div>
        <div className="footerdiv">
        <div>
            <p className="abovefooter">Supporting over 400 customers across government and corporate industries</p>
        </div>
        </div>
       </div>
        );
    }
}
export default Content;