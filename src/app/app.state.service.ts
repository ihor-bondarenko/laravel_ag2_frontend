import {Injectable, EventEmitter} from '@angular/core';
import { AppEmitterService } from './app.emitter.service';
import {Observable} from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import * as _ from "lodash";

@Injectable()
export class AppStateService {
    private subject = new Subject<any>();

    constructor() {
        //
    }

    updateAppState(state: string, value: any) {
           this.states[state] = value;
           this.subject.next( this.states );
    }

    getStates(): Observable<any> {
        return this.subject.asObservable();
    }

    private states: { [ID: string]: any } = {
        "progressBarMode": "determine"
    };

    public get(ID: string): any {
        if (this.states[ID]){
            return this.states[ID]
        }
    }

    public set(ID: string, Value: any){
        this.states[ID] = Value;
    }
}