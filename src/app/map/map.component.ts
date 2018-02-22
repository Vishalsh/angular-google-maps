import { Component } from '@angular/core';

import { Map } from './map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: Map = {
    source: 'Mumbai',
    destination: 'Pune'
  };
}
