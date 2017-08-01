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
    
  add(value ,validity) {
    
    if(!validity){
      alert("Please enter all fields correctly!");
      return;
      
    }
   
    console.log(value);
    console.log(this.addForm.value);
    this.router.navigate(['./']);
  }

ngOnInit() {
  }

}  
