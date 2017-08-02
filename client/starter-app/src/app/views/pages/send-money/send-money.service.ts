import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SendMoneyService {

  constructor(private _http : Http) { }

  private apiURL = 'http://10.0.1.62:8080/api/customer/add';

   postRegister(sendMoneyPostData){

       return this._http.post(this.apiURL, sendMoneyPostData)
        .map((response:Response) => response.json());
       
        
    }

}
