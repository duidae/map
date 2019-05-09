import React from 'react'
import {Map as LeafletMap, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Map.css"

export class RenewalMap extends React.Component {
  private static readonly TAIPEI = {lat: 25.038357847174, lng: 121.54770626982};
  private static readonly ZOOM_INITIAL = 13.4;

  render() {
    return (
      <LeafletMap
        center={RenewalMap.TAIPEI}
        zoom={RenewalMap.ZOOM_INITIAL}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      </LeafletMap>
    );
  }
}