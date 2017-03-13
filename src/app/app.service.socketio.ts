import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import * as io from "socket.io-client";
import { AppEmitterService } from './app.emitter.service';
import { AppStateService } from './app.state.service';

@Injectable()
export class SocketService {
    private name: string;
    private host: string = window.location.protocol + "//" + window.location.hostname + ":" + 8124;
    socket: SocketIOClient.Socket;

    constructor(private appStateService: AppStateService) {
        this.initSocketConnect();
    }

    // Get items observable
    private initSocketConnect(name?: string): Observable<any> {
        this.name = 'clients';
        let socketUrl = this.host + "/" + this.name;
        this.socket = io.connect(socketUrl);
        this.socket.on("connect", () => this.connect());
        this.socket.on("disconnect", () => this.disconnect());
        this.socket.on("error", (error: string) => {
            console.log(`ERROR: "${error}" (${socketUrl})`);
        });
        this.socket.on("new-table-structure",(data: any) => {
            console.log(data);
            AppEmitterService.get('new-table-structure').emit(data);
            this.appStateService.states.progressBarMode = "buffer";
        });
        this.socket.on("last-structure-update",(data: string) => {
            AppEmitterService.get('last-structure-update').emit(data);
        });

        // Return observable which follows "create" and "remove" signals from socket stream
        return Observable.create((observer: any) => {
            //this.socket.on("create", (item: any) => observer.next({ action: "create", item: item }) );
            //this.socket.on("remove", (item: any) => observer.next({ action: "remove", item: item }) );
            return () => this.socket.close();
        });
    }

    public getTableStructure() {
       // console.log(this.appStateService.states);
        this.appStateService.states.progressBarMode = "query";
        this.socket.emit("get-table-structure", {});
    }

    // Handle connection opening
    private connect() {
        console.log(`Connected to "${this.name}"`);

        // Request initial list when connected
        this.socket.emit("list");
    }

    // Handle connection closing
    private disconnect() {
        console.log(`Disconnected from "${this.name}"`);
    }
}