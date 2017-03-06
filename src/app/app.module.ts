import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { AppPersonsList }  from './app.persons-list';
import { ItemBox }  from './app.item-box';

import { AppService } from './app.service';
import { UUIDService as uuid }  from './app.uuid.service';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule
  ],
  declarations: [ AppComponent, AppPersonsList, ItemBox ],
  providers: [
    AppService,
    uuid
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
