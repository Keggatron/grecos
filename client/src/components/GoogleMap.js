import React, { Component } from 'react';
/* global google */

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      center: {
        lat: 62.441,
        lng:-114.362
      },
      zoom: 15
    });
  }
  
  render() {
    return <div ref="map" />;
  
  }
}



export default GoogleMap;