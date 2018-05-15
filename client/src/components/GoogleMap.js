import React, { Component } from 'react';
/* global google */

class GoogleMap extends Component {
  componentDidMount() {
    let lat = 62.441491;
    let lon = -114.363150
    
    new google.maps.Map(this.refs.map, {
      zoom: 15,
      center: {
        lat: lat,
        lng: lon
      }
    });
  }
  
  render() {
    return <div ref="map" style={{height: '300px', width: '400px'}} />;
  }
}

export default GoogleMap;