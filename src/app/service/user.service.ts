import { Injectable } from '@angular/core';
import { Headers, HttpModule, RequestOptions, Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConfig } from '../config/appconfig';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Options } from 'selenium-webdriver/ie';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { Body } from '@angular/http/src/body';

@Injectable()
export class UserService{
  constructor(private http: Http, private config: AppConfig) { }
  public readonly headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Token': this.config.Token
    , 'Accept': 'application/json,text/plain,Access-Control-Request-Headers,Access-Control-Allow-Headers'
  });

  GetUserLogin(data: any) {
    const body = JSON.stringify(data)
    debugger;
    return this.http.post(`${this.config.APIUrl}${this.config.login}`, body, { headers: this.headers })
    .map((response: Response) => {
      return response;
    });
  };

  // Students

  studentFetch() {
    const options = new RequestOptions({ headers: this.headers });
    debugger;
    return this.http.get(this.config.APIUrl + this.config.students , options).map((response: Response) => {
      return response.json();
    })
  }
  studentCreate(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.students}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };

  studentUpdate(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.students}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
  studentDelete(id: string) {

    return this.http.delete((this.config.APIUrl + this.config.students, id), { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };

  // Event

  eventsFetch() {
    const options = new RequestOptions({ headers: this.headers });
    debugger;
    return this.http.get(this.config.APIUrl + this.config.events , options).map((response: Response) => {
      return response.json();
    })
  }
  eventCreate(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.events}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };

  eventUpdate(data: any) {
    const body = JSON.stringify(data)
    return this.http.post(`${this.config.APIUrl}${this.config.events}`, body, { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
  eventDelete(id: string) {

    return this.http.delete((this.config.APIUrl + this.config.events, id), { headers: this.headers })
      .map(res => {
        return res.json();
      });
  };
}
