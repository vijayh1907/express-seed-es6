import { Injectable } from '@angular/core';

import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class RegisterService {

  constructor(private _http : Http) { }


   postRegister(registerPostData){

       return this._http.post('http://10.0.1.62:8080/api/customer/add',registerPostData)
        .map((response:Response) => response.json());
       
    }

}