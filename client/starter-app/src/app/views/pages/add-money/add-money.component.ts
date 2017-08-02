import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AddMoneyService } from './add-money.service';
import { BalanceService} from '../../../balance.service';


@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {

  public addForm = this.fb.group({
     wallet_amount: ["",[ Validators.required, Validators.pattern("^(?:10000)$|^([1-9])$|^([1-9][0-9])$|^([1-9][0-9][0-9])$|^([1-9][0-9][0-9][0-9])$")]]
  });

  valid = true;
  show = true;
  balance = 20511;
  customer_id = 70;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public addMoneyService: AddMoneyService,
    public balanceService: BalanceService
    ) { }

  add(form) {  
    console.log(form._value);
    if((form._value.wallet_amount+this.balance) > 25000){
      this.valid = false;
      console.log(form._value.wallet_amount+this.balance);
    } else {
      this.valid=true;
      this.createObj(form._value.wallet_amount)
    }
  }

  createObj(val) {
    let obj= {
      customer_id : this.customer_id,
      wallet_amount : val
    }
    this.addMoney(obj);
    //console.log(obj,"this the object created");
  }

  addMoney(value){
    this.addMoneyService.addBalance(value)
    .subscribe(data => {
      this.balanceService.updateBalance(data.wallet_amount);
      this.show = false;
    });
  }

ngOnInit() {
  }

}  
