import React, { Component } from "react";

export default class GoogleMaps extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // this.refs.map - give direct ref to actual html element
    return <div ref="map" />;
  }
}
