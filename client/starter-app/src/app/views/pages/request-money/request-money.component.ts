import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from './request.service';


@Component({
  selector: 'app-request-money',
  templateUrl: './request-money.component.html',
  styleUrls: ['./request-money.component.scss']
})
export class RequestMoneyComponent implements OnInit {
private val: any;
public requestForm = this.fb.group({
    requested_from: ['',[ Validators.required, Validators.pattern("(^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$)|^(\\d{10})$")]],
    amount: ['',[ Validators.required, Validators.pattern("^(\\d{1,})$")]]
  });

  constructor(
    public router: Router,
    public fb: FormBuilder,
    private requestService: RequestService) { }

  request(form) {
   this.requestService.postRequestData(form._value)
   .subscribe(data => this.val = data);
   this.router.navigate(['./']);
  }

ngOnInit() {
  }

}
