import React ,{Component} from 'react';

import './Content.css';
import  Hexagon from './Hexagon/Hexagon';
class Content extends Component{
    render(){
        return(
            <section className="contenthexagon">
                    <div className="content">
                        <p>
                            Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in derIndustrie bereits der
                            Standard Demo -Text seit1500, als ein unbekannter Schriftsteller. Lorem Ipsum ist ein einfacher
                            Demo-Text für diePrint- und Schriftindustrie. Lorem Ipsum ist in derIndustrie bereits der Standard
                            Demo -Text seit1500, als ein unbekannter Schriftsteller.
                        </p>

                        <p className="contentpara">
                            Lorem Ipsum ist ein einfacher Demo-Text für diePrint- und Schriftindustrie. Lorem Ipsum ist in derIndustrie bereits der Standard
                            Demo -Text seit1500, als ein unbekannter Schriftsteller.
                        </p>
                    </div>
                    <Hexagon/>
                </section>
        );
    }
}

export default Content;