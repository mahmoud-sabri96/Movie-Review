import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userDataDecode: any = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {

    //==> to handle page refresh
    //check if userToken is exist in localStorage
    if (localStorage.getItem('userToken')) {
      //1- assign the localStorage data to userDataDecode variable
      this.userDataDecode.next(localStorage.getItem('userToken'));
      //2- decode userToken
      this.decodeUserTokenData();
      //3- navigate to currPage Page
      _Router.navigate([`${localStorage.getItem('currPage')}`]);
    }
  }

  // to handle register request
  sendRegisterForm(registerFormData: object): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signup", registerFormData)
  }

  // to handle login request
  sendLoginForm(loginFormData: object): Observable<any> {
    return this._HttpClient.post("https://route-egypt-api.herokuapp.com/signin", loginFormData);
  }

  // to handle decode user data
  decodeUserTokenData() {
    //get userToken From local storage
    this.userDataDecode.next(jwt_decode(JSON.stringify(localStorage.getItem('userToken'))));
    // console.log(this.userDataDecode)
  };
};
