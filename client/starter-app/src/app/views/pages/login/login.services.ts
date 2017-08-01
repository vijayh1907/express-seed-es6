import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    private _url : string = "login.json";
    // private _purl:string  = "http://validate.testjson.com";
    constructor(private _http:Http){}


    getLogin(){
       return this._http.get(this._url)
        .map((response:Response) => response.json());
      }
    postLogin(){
      
       let postData = JSON.stringify({var1:'test',var2:3});
       let params   = "postData="+postData;
       let headers  = new Headers();
       headers.append('Content-Type', 'application/x-www-form-urlencoded');
       console.log(params);
       return this._http.post('http://validate.testjson.com',params ,{headers: headers})
        .map((response:Response) => response.json());
        
    }

}