import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

  public addForm = this.fb.group({
     amount: ["",[ Validators.required, Validators.pattern("^(?:10000)$|^([1-9])$|^([1-9][0-9])$|^([1-9][0-9][0-9])$|^([1-9][0-9][0-9][0-9])$")]]
  });

  constructor(public router : Router, public fb: FormBuilder) { }
    
  add(form) {
    
    if(form.invalid){
      return;
      }
    
  this.router.navigate(['./']);
  }

ngOnInit() {
  }

}  
