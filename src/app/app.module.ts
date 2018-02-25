import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { RouteService } from './route/route.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    RouteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
