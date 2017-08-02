import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  postLoginData(body) {
    console.log("body",body)
    return this.http.post('http://10.0.1.62:8080/api/customer/login',body)
    .map(res => res.json());
  }
    
}


