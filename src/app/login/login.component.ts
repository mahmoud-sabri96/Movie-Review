import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginErrorMsg: string = '';

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Z][0-9]{2,}$')]),
  })


  loginFormSubmit(loginFormData: FormGroup) {
    // console.log(loginFormData.value);
    this._AuthService.sendLoginForm(loginFormData.value).subscribe((response) => {

      if (response.message == "success") {
        // token tmam
        // 1-localStorage ==> token
        localStorage.setItem('userToken', response.token);
        // 2- service ==> decode , shared
        this._AuthService.decodeUserTokenData();
        // 3- navigate to home
        this._Router.navigate(['/home']);

      } else {
        this.loginErrorMsg = response.message;
      }

    })
  }


  showLabel(input: any) {
    if (input.value.length > 0) {
      input.previousSibling.classList.add("showLabel")
    } else {
      input.previousSibling.classList.remove("showLabel")
    }
  }

  constructor(private _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {
  }



}
