import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService, AuthResponseData } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  form: FormGroup

  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,

      ]),

      password: new FormControl('', [
        Validators.required,
      ])
    })
  }


  onSwitchAuthModule() {

  }

  onLogin() {

    this.authService.login(this.form.value.email, this.form.value.password).subscribe(resData => {
      console.log("HERE");
      console.log(resData);
      this.router.navigateByUrl("/system/maintenance/clients");
    }, errRes => {

      const code = errRes.error.error.message;
      let message = 'Не получилось зрагитрироваться, попробуйте еще раз';
      if (code === 'EMAIL_NOT_FOUND') {
        message = 'Данные адрес не зарегистрирован'
      } else if (code === 'INVALID_PASSWORD') {
        message = 'Неправильный пароль'
      }
    });


      // let authObs: Observable<AuthResponseData>;
      // authObs = this.authService.login(this.form.value.email, this.form.value.password);
      

      // authObs.subscribe(resData => {
      //   console.log(resData);
      //   this.router.navigateByUrl("/system/maintenance/clients");
      // }, errRes => {

      //   const code = errRes.error.error.message;
      //   let message = 'Не получилось зрагитрироваться, попробуйте еще раз';
      //    if (code === 'EMAIL_NOT_FOUND') {
      //     message = 'Данные адрес не зарегистрирован'
      //   } else if (code === 'INVALID_PASSWORD') {
      //     message = 'Неправильный пароль'
      //   }
      // });
  }

  goToRegistration(){
   this.router.navigateByUrl("/auth/registration")
  }

}
