import { Component, OnDestroy } from '@angular/core';
import { SmsService } from "./sms.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  smsSubscription: Subscription;
  message: string = '';
  isLoading: boolean = false;

  constructor(private smsService: SmsService) {
  }

  sendSms(phone: string = '', msg: string = '') {
    this.isLoading = true;
    this.message = '';

    this.smsSubscription = this.smsService.sendSms(phone, msg).subscribe(res => {
      console.log(res);
      this.isLoading = false;
      this.message = res?.body?.message;
    })
  }

  ngOnDestroy() {
    this.smsSubscription.unsubscribe();
  }
}
