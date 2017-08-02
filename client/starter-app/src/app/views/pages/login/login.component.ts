import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
responseData : any;
validity = true;

  public loginForm = this.fb.group({
    customer_email: ["",[ Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|\\d{10}")]],
    customer_password: ["", Validators.required]
  });

  constructor(
    public router: Router, 
    public fb: FormBuilder,
    private loginService: LoginService) { }

  Login(form) {
    this.loginService.postLoginData(form._value)
    .subscribe(data => {
      this.checkUserValid(data);
    });
  }

  checkUserValid(user: any) {
    if (user.data) {
        this.router.navigate(['./dashboard']);
        this.validity = true;
      } else {
        this.validity = false;
      }
  }

ngOnInit() {
  }

}
