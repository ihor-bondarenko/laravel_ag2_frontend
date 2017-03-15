import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { AppPersonsList }  from './app.persons-list';
import { ItemBox }  from './app.item-box';
import { DifferenceItemBox } from './app.difference.item-box'
import { AppVersionsList }  from './app.versions-list';

import { AppService } from './app.service';
import { SocketService } from './app.service.socketio';
import { UUIDService as uuid }  from './app.uuid.service';
import { AppStateService } from "./app.state.service";
import { AppSnakeBarService } from "./app.snakebar.service";
import { AppSnackBar } from "./app.snackbar";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    AppPersonsList,
    ItemBox,
    DifferenceItemBox,
    AppVersionsList,
    AppSnackBar
  ],
  providers: [
    AppService,
    uuid,
    SocketService,
    AppStateService,
    AppSnakeBarService
  ],
  entryComponents: [AppSnackBar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
