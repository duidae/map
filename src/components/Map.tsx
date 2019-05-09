import React from 'react'
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.css"

export class RenewalMap extends React.Component {
  private static TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
  private static ZOOM_INITIAL = 13.4;

  render() {
    return (
      <LeafletMap
        center={RenewalMap.TAIPEI}
        zoom={RenewalMap.ZOOM_INITIAL}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}