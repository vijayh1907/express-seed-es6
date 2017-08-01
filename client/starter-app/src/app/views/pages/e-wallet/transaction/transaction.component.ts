import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';



class History{
  transaction_id:number;
  sender_name:string;
  amount:number;
  transaction_type:number;  //defines the type of payment(if recieved or sent)
  receiver_name:string;
  created_at:string;
}

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {

  private HISTORY: History[]=[
	{transaction_id:111,sender_name:"rishikesh",amount:10000,transaction_type:1,receiver_name:"adarash",created_at:"7/20/17"},
	{transaction_id:112,sender_name:"akshay",amount:10000,transaction_type:2,receiver_name:"adarash",created_at:"1/30/17"},
	{transaction_id:113,sender_name:"adarsh",amount:10000,transaction_type:2,receiver_name:"akshay",created_at:"1/7/17"},
	{transaction_id:114,sender_name:"adarsh",amount:10000,transaction_type:1,receiver_name:"rishikesh",created_at:"4/9/17"}
	];

  title='Transaction History';
  History : any;
    
  // loadTransaction() {
      // this.historyService.getTransactions()
        // .then(data => {this.History = data.transaction; console.log(this.History)});
    // }

  constructor( private historyService : HistoryService) { }

  ngOnInit() {
    // this.loadTransaction();
  }

}