import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IOee } from './oee';

@Injectable()
export class OeeService {
    private _oeeUrl = 'http://localhost/OEEWebAPI/api/v1/OEE';

    constructor(private _http: Http) { 
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'x-id');
    }

    getOees(): Observable<IOee[]> {
        return this._http.get(this._oeeUrl)
            .map((response: Response) => <IOee[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOee(id: number): Observable<IOee> {
        return this.getOees()
            .map((oees: IOee[]) => oees.find(x => x.oeeid === id));
    }

    createOee(oee: IOee): Observable<IOee> {
        return this._http.post(this._oeeUrl + 'oee/', JSON.stringify(oee))
            .map((res: Response) => {
                return res.json();
            })
            .catch(this.handleError);
    }
 
    updateOee(oee: IOee): Observable<void> {
        return this._http.put(this._oeeUrl + 'oee/' + oee.oeeid, JSON.stringify(oee))
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }
 
    deleteOee(id: number): Observable<void> {
        return this._http.delete(this._http + 'oee/' + id)
            .map((res: Response) => {
                return;
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}