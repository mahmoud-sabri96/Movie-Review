import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router) {
  }

  ngOnInit(): void {
  }

  // variable to receive error of resaponse
  registerErorrMsg: string = '';
  registerSuccessMsg: string = '';

  // create formGroup which contain every formControl
  registerForm = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]), // null is default value
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern("^[A-Z][0-9]{2,}$")]),
    age: new FormControl(null, [Validators.required, Validators.min(20), Validators.max(60)]),
  })


  // this method to show label of input on key up
  showLabel(input: any) {
    if (input.value.length > 0) {
      input.previousSibling.classList.add("showLabel")
    } else {
      input.previousSibling.classList.remove("showLabel")
    }
  }

  // this method will take registerForm: FormGroup as prameter 
  submitFormHandler(registerFormData: FormGroup) {
    // console.log(registerForm);
    // console.log(registerForm.value);
    this._AuthService.sendRegisterForm(registerFormData.value).subscribe((response) => {

      if (response.message == 'success') {
        // programming router
        // programming router take array becuase we can navigate to path with data
        this.registerSuccessMsg = "success";
        setTimeout(() => {
          this._Router.navigate(['login']);
        }, 1000)
      } else {
        this.registerErorrMsg = response.errors.email.message;
      }
    })
  }




}
