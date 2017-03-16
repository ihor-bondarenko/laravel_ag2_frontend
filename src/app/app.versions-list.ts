import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AppService} from './app.service';
import { SocketService } from './app.service.socketio';
import { AppStateService } from "./app.state.service";
import { AppEmitterService } from './app.emitter.service';
import { Version } from "./app.version";
import * as _ from "lodash";

@Component({
    selector: 'versions-list',
    templateUrl: './dist/app/app.versions-list.html',
})
export class AppVersionsList implements OnInit, OnChanges{
    private versions: Version[] = [];

    constructor(  private itemService: AppService,
                  private appStateService: AppStateService,
                  private socketService: SocketService
    ) {
       //
    }

    ngOnInit(){
        AppEmitterService.get('new-versions-list').subscribe((list: Version[]) => {
            console.log(list);
            this.versions = list;
        });
        AppEmitterService.get('updated-version-data').subscribe((version: Version) => {
            console.log(version);
            let objIndex = _.findIndex(this.versions,{id: version.id});
            if(objIndex !== -1){
                this.versions[objIndex] =  version;
            }
            console.log(this.versions);
        });
    }

    ngOnChanges(changes:any) {
    }

    compareDatabase(version: Version){
        version.updateState = true;
        AppEmitterService.get('update-version-data').emit(version);
    }
}