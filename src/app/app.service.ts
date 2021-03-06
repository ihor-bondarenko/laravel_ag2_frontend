import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Item } from './app.item';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
    // private instance variable to hold base url
    private commentsUrl = 'http://laravel.local:8124/get-table-structure';
    private compareUrl = 'http://laravel.local:8124/compare-tables';
    // private commentsUrl = 'http://578f454de2fa491100415d08.mockapi.io/api/Comment';

    // Fetch all existing comments
    getList() : Observable<Item[]>{
        // ...using get request
        return this.http.get(this.commentsUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    compareTables(): Observable<any>{
        return this.http.get(this.compareUrl)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}