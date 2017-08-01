import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm = this.fb.group({
    name: ["", [Validators.required, Validators.pattern("")]],
    email: ["", Validators.required],
    phone: ["", [Validators.required, Validators.pattern("\\d{10}")]],
    password: ["", [Validators.required, Validators.pattern("(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}")]]
  });

  constructor(
    public router : Router,
    public fb: FormBuilder
  ) { }
    
  Register(value ,validity) {

    if(!validity){
      alert("Please enter all fields correctly!");
      return;  
    }
    
    console.log(value);
    console.log(this.registerForm.value);
    this.router.navigate(['./']);
  }


  ngOnInit() {
  }

}
