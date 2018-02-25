import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

import {Journey} from '../journey';
import {routeData} from './routeData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  journey: Journey = {
    source: 'Mumbai',
    destination: 'Pune'
  };

  ngOnInit() {
    const mapProp = {
      center: routeData[0],
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const sourceMarker = new google.maps.Marker({
      position: routeData[0],
      map: this.map,
      icon: {
        url: '../../assets/map-start-point.svg',
        size: new google.maps.Size(150, 150),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(75, 75),
      }
    });

    new google.maps.InfoWindow({
      content: `Lat: ${routeData[0].lat} Lng: ${routeData[0].lng}`
    }).open(this.map, sourceMarker);

    const destinationMarker = new google.maps.Marker({
      position: routeData[routeData.length - 1],
      map: this.map,
      icon: {
        url: '../../assets/map-end-point.svg',
        size: new google.maps.Size(150, 150),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(75, 75),
      }
    });

    new google.maps.InfoWindow({
      content: `Lat: ${routeData[routeData.length - 1].lat} Lng: ${routeData[routeData.length - 1].lng}`
    }).open(this.map, destinationMarker);

    const route = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      editable: false,
      map: this.map
    });

    for (let i = 0; i < routeData.length; i++) {
      let pct = 0;
      setTimeout(function (coords) {
        const latlng = new google.maps.LatLng(coords.lat, coords.lng);
        route.getPath().push(latlng);
      }, 30 * i, routeData[i]);
    }
  }
}
