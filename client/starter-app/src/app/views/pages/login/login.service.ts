import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';


@Injectable()
export class LoginService {
  private serverURL = 'http://10.0.1.62:8080/api/';


  constructor(private http: Http) { }

  postLoginData(data) {
    return this.http.post(this.serverURL + 'customer/login' , data)
    .map(res => res.json())
    .catch(err => "Error");
  }  }


