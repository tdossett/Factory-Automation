import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IPlanned } from './planned';

@Injectable()
export class PlannedService {
    private _plannedUrl = 'http://localhost/OEEWebAPI/api/v1/Dashboard/Planned';

    constructor(private _http: Http) { 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'x-id');
    }

    getPlans(): Observable<IPlanned[]> {
        return this._http.get(this._plannedUrl)
            .map((response: Response) => <IPlanned[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getPlanned(id: number): Observable<IPlanned> {
        return this.getPlans()
            .map((planned: IPlanned[]) => planned.find(x => x.plannedId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}