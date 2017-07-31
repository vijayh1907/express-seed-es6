import { Component, OnInit } from '@angular/core';


export class History{
  transaction_id:number;
  sender_name:string;
  amount:number;
  transaction_type:number;  //defines the type of payment(if recieved or sent)
  reciever_name:string;
  date:string;
}

const HISTORY: History[]=[
{transaction_id:111,sender_name:"rishikesh",amount:10000,transaction_type:1,reciever_name:"adarash",date:"20/7/17"},
{transaction_id:112,sender_name:"akshay",amount:10000,transaction_type:2,reciever_name:"adarash",date:"30/1/17"},
{transaction_id:113,sender_name:"adarsh",amount:10000,transaction_type:2,reciever_name:"akshay",date:"1/7/17"},
{transaction_id:114,sender_name:"adarsh",amount:10000,transaction_type:1,reciever_name:"rishikesh",date:"4/9/17"}
];



@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {
  title='Transaction History';
  History=HISTORY;
   selectedHistory: History;

  onSelectHistory(history:History){
  this.selectedHistory=history;
  };
  
  constructor() { }

  ngOnInit() {
  }

}
