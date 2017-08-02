import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class send_moneyService {

  constructor(private _http : Http) { }


   postRegister(send_moneyPostData){

       return this._http.post('http://10.0.1.62:8080/api/customer/add',send_moneyPostData)
        .map((response:Response) => response.json());
       
        
    }

}
