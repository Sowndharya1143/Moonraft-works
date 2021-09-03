import React, { Component } from 'react';

import './Hexagon.css';
class Hexagon extends Component {
    render(){
        return(
            <div className="hex ">
                        <div className="div1">
                            <div id="hex1" className="hexagon-wrapper">
                                <div id="color1" className="hexagon">
                                </div>
                            </div>
                        </div>
                        <div className="div2">
                            <div id="hex2" className="hexagon-wrapper">
                                <div id="color2" className="hexagon"></div>
                            </div>
                        </div>
                        <div className="div3">
                            <div id="hex3" className="hexagon-wrapper">
                                <div id="color3" className="hexagon">
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}
export default Hexagon;