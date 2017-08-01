import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.component.html',
  styleUrls: ['./request-money.component.scss']
})
export class RequestMoneyComponent implements OnInit {

public requestForm = this.fb.group({
    emailphone: ["",[ Validators.required, Validators.pattern("(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$)|^(\\d{10})$")]],
    requestamount: ["",[ Validators.required, Validators.pattern("^(\\d{1,})$")]]
  });

  constructor(public router : Router, public fb: FormBuilder) { }
    
  request(value ,validity) {
    if(!validity){
      alert("Please enter all fields correctly!");
      return;
      
    }
   
    console.log(value);
    console.log(this.requestForm.value);
    this.router.navigate(['./']);
  }

ngOnInit() {
  }

}
