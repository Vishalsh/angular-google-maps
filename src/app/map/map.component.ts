import {Component} from '@angular/core';
import {ViewChild} from '@angular/core';
import {} from '@types/googlemaps';

import {RouteService} from '../route/route.service';
import {Location} from '../route/location';
import { mapStyles, COLORS } from './map.styles';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  source: string;
  destination: string;
  route: Location[];

  constructor(private routeService: RouteService) {
  }

  ngOnInit() {
    const mapProp = {
      center: { // initial center location
        "lat": 8.893260000000001,
        "lng": 76.61427
      },
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: mapStyles
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  private drawMarkers(): void {
    const sourceMarker = new google.maps.Marker({
      position: this.route[0],
      map: this.map,
      icon: {
        url: '../../assets/images/map-start-point.svg',
        size: new google.maps.Size(150, 150),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(75, 75),
      }
    });

    new google.maps.InfoWindow({
      content: `Lat: ${this.route[0].lat} Lng: ${this.route[0].lng}`
    }).open(this.map, sourceMarker);

    const destinationMarker = new google.maps.Marker({
      position: this.route[this.route.length - 1],
      map: this.map,
      icon: {
        url: '../../assets/images/map-end-point.svg',
        size: new google.maps.Size(150, 150),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(75, 75),
      }
    });

    new google.maps.InfoWindow({
      content: `Lat: ${this.route[this.route.length - 1].lat} Lng: ${this.route[this.route.length - 1].lng}`
    }).open(this.map, destinationMarker);
  }

  private drawLine(): void {
    const line = new google.maps.Polyline({
      path: [],
      geodesic: true,
      strokeColor: COLORS.BLUE_GREY,
      strokeWeight: 3,
      editable: false,
      map: this.map
    });

    for (let i = 0; i < this.route.length; i++) {
      let pct = 0;
      setTimeout((coords) => {
        const latlng = new google.maps.LatLng(coords.lat, coords.lng);
        line.getPath().push(latlng);
      }, 30 * i, this.route[i]);
    }
  }

  getRoute(event: any): void {
    event.preventDefault();
    this.routeService.getRoute(this.source, this.destination)
      .subscribe(route => this.route = route);

    this.map.setCenter(this.route[0]);
    this.drawMarkers();
    this.drawLine();
  }
}
