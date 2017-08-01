import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent implements OnInit {

  
public sendForm = this.fb.group({
    emailphone: ["",[ Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|\\d{10}")]],
  sendamount: ["",[ Validators.required, Validators.pattern("^(?:10000)$|^([1-9])$|^([1-9][0-9])$|^([1-9][0-9][0-9])$|^([1-9][0-9][0-9][0-9])$")]]
  });

  constructor(public router : Router, public fb: FormBuilder) { }
    
  send(form) {
    
    this.router.navigate(['./']);
  }

ngOnInit() {
  }

}  
