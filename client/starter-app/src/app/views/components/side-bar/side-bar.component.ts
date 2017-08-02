import { Component, OnInit, OnDestroy } from '@angular/core';
import { BalanceService} from '../../../balance.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  balance : any;
  subscription : Subscription;

  constructor(
  	public balanceService : BalanceService
  	) { this.subscription = this.balanceService.getBalance().subscribe(balance => this.balance = balance)}

  ngOnInit() {
  	
  }

  ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
