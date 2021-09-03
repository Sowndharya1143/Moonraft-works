import React,{Component} from 'react';
import classes from './Map.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
class MapSection extends Component{
    render(){
        return(
            <section className={classes.MapSection}>
                {/* <Map google={this.props.google} zoom={8}> */}
                    <Map
                    google={this.props.google}
                    
                    initialCenter={{
                        lat: 12.9716,
                        lng: 77.5946
                    }}
                    zoom={8}
                    onClick={this.onMapClicked}
                    >
    
                <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
        
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                    </div>
                </InfoWindow>
            </Map>
          </section>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyD2knBJvargR7w0KtIMEzWWvlMjU4rWlBc")
  })(MapSection)