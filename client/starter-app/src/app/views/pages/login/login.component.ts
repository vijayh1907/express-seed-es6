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
body={};
validity = true;

  public loginForm = this.fb.group({
    emailphone: ["",[ Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$|\\d{10}/)]],
    password: ["", Validators.required]
  });

  constructor(
    public router: Router, 
    public fb: FormBuilder,
    private loginService: LoginService) { }

  Login(body) {
    console.log("tsbody",body)
    this.loginService.postLoginData(body)
    .subscribe(data => {
      this.checkUserValid(data);
      //console.log(this.responseData ,"data");
    });
  }

  checkUserValid(user: any) {
    if (user.data) {
        this.router.navigate(['./dashboard']);
        this.validity = true;
        //console.log(this.responseData.data, 'data');
      } else {
        console.log("user not found");
        this.validity = false;
      }
  }

ngOnInit() {
  }

}
