import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

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
    public fb: FormBuilder,
    private registerService: RegisterService
  ) { }

  Register(form) {
    
     this.router.navigate(['./']);
  }


  ngOnInit() {
  }

}