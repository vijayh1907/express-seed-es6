import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {routes} from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionHistoryComponent } from './dashboard/transaction-history/transaction-history.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { EWalletComponent } from './views/pages/e-wallet/e-wallet.component';
import { ProfileComponent } from './views/pages/e-wallet/profile/profile.component';
import { TransactionComponent } from './views/pages/e-wallet/transaction/transaction.component';
import { AddMoneyComponent } from './views/pages/add-money/add-money.component';
import { RequestMoneyComponent } from './views/pages/request-money/request-money.component';
import { SendMoneyComponent } from './views/pages/send-money/send-money.component';
import { NotificationComponent } from './views/pages/notification/notification.component';
import { TopNavComponent } from './views/components/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TransactionHistoryComponent,
    LoginComponent,
    RegisterComponent,
    EWalletComponent,
    ProfileComponent,
    TransactionComponent,
    AddMoneyComponent,
    RequestMoneyComponent,
    SendMoneyComponent,
    NotificationComponent,
    TopNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
