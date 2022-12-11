import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogin: boolean = false;


  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
    // to handle navbar links depend on userData
    this._AuthService.userDataDecode.subscribe(() => {
      if (this._AuthService.userDataDecode.getValue() == null) {
        this.isLogin = false;
      } else {
        this.isLogin = true;
      }

    })

  }

  //to handle logout feature
  logoutHandler() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('currPage');
    this._AuthService.userDataDecode.next(null);
    this._Router.navigate(['login']);
  }

}
