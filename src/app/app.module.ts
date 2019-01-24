import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridMapComponent } from './grid-map/grid-map.component';
import { GridShipComponent } from './grid-ship/grid-ship.component';

@NgModule({
  declarations: [
    AppComponent,
    GridMapComponent,
    GridShipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
