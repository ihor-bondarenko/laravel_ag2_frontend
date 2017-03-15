import {Injectable, EventEmitter} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { AppEmitterService } from './app.emitter.service';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import * as _ from "lodash";
import { AppSnackBar } from "./app.snackbar";

@Injectable()
export class AppSnakeBarService {
    constructor(public snackBar: MdSnackBar) {
        //
    }
    openSnackBar(message: string, action: string) {
       /* this.snackBar.open(message, action, {
            duration: 2000,
        });*/
        this.snackBar.openFromComponent(AppSnackBar, {
            duration: 4000,
            announcementMessage: message
        });
    }
}