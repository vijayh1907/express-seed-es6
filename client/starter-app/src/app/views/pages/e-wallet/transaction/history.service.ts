import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';


@Injectable()
export class HistoryService {

	headers:any;

	constructor(
			private http : Http
		) {    this.headers = new Headers
    ({
        'Content-Type': 'application/json'
    });}

    getTransactions() {
    	return this.http.get('http://10.0.1.62:8080/api/transactions')
    		.toPromise()
    		.then(this.extractData)
    		.catch(this.handleError);
  	}

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    return error
  } 	
}