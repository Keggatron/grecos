import React, { Component } from 'react';
/* global google */

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: -114.362,
        lng: 62.441
      }
    });
  }
  
  render() {
    return <div ref="map" style={{height: '300px', width: '400px'}} />;
  }
}

export default GoogleMap;