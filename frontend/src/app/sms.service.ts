import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  baseUrl = 'https://oxth7jnn81.execute-api.us-east-1.amazonaws.com/dev/api/sendText';

  constructor(private http: HttpClient) { }

  sendSms(to: string, message: string): Observable<any> {
    const body = { to, message };
    return this.http.post(this.baseUrl, body);
  }
}
