import {Injectable, EventEmitter} from '@angular/core';
import { AppEmitterService } from './app.emitter.service';

@Injectable()
export class AppStateService {

    constructor() {

    }

    public states: { [ID: string]: any } = {
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