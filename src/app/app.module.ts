import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from "@angular/forms";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Angular Material
import { MaterialModule } from "./material.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';

import { AgmCoreModule } from '@agm/core';
import { MapEditComponent } from './components/map/map-edit.component';

@NgModule({
  entryComponents: [
    MapEditComponent
  ],
  declarations: [
    AppComponent,
    MapComponent,
    MapEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9MC5YRuZpISFdyOFK0BE34c5oFTmrMcY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
