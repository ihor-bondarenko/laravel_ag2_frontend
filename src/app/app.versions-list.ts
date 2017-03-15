import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AppService} from './app.service';
import { SocketService } from './app.service.socketio';
import { AppStateService } from "./app.state.service";
import { AppEmitterService } from './app.emitter.service';

@Component({
    selector: 'versions-list',
    templateUrl: './dist/app/app.versions-list.html',
})
export class AppVersionsList implements OnInit, OnChanges{
    private versions: any[];

    constructor(  private itemService: AppService,
                  private appStateService: AppStateService,
                  private socketService: SocketService
    ) {
        this.versions = [];
    }

    ngOnInit(){
        AppEmitterService.get('new-versions-list').subscribe((list: any) => {
            this.versions = list;
        });
    }

    ngOnChanges(changes:any) {
    }

    compareDatabase(version: any){
        console.log(version);
    }
}