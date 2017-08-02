import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
=======
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
>>>>>>> b9767c3e229c288fbe8fb80a3c022e65bae64014

@Injectable()
export class RegisterService {

<<<<<<< HEAD
  constructor(private _http : Http) { }


   postRegister(registerPostData){

       return this._http.post('http://10.0.1.62:8080/api/customer/add',registerPostData)
        .map((response:Response) => response.json());
       
    }
=======
    constructor(private http:Http) { }
>>>>>>> b9767c3e229c288fbe8fb80a3c022e65bae64014

}