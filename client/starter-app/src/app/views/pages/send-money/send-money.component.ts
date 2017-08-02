import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {send_moneyService } from './send-money.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {
 data={};
public sendForm = this.fb.group({
    emailphone: ["",[ Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|\\d{10}")]],
  sendamount: ["",[ Validators.required, Validators.pattern("^(?:10000)$|^([1-9])$|^([1-9][0-9])$|^([1-9][0-9][0-9])$|^([1-9][0-9][0-9][0-9])$")]]
  });

  
  constructor(private _send_moneyService: send_moneyService,
    public router : Router, public fb: FormBuilder) { }
    
  send(form) {
    
    this.router.navigate(['./']);
  }

postFunction(data)
{

  this._send_moneyService.postRegister(data)
    .subscribe(data => {
      this.data = JSON.stringify(data);  
       
  });
}


ngOnInit() {
  }

}  
