import { Injectable } from '@angular/core';

import { Location } from './location';
import { route } from '../data/route';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class RouteService {
  getRoute(source, destination): Observable <Location[]> {
    return of(route);
  }
}
