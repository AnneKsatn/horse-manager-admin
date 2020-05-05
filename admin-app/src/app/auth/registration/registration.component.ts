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
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  
  form: FormGroup

  matcher = new MyErrorStateMatcher();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      password: new FormControl('', [
        Validators.required,
      ]),

      title: new FormControl('', [
        Validators.required,
      ])
    })
  }

  authenticate(email: string, password: string, title: string){

      let authObs: Observable<AuthResponseData>;
      console.log(email, password);
      authObs = this.authService.signup(email, password);

      authObs.subscribe(resData => {
        console.log(resData);
        this.authService.addClubDoc(resData.localId, title);
        this.router.navigateByUrl('/system/dashboard');
      }, errRes => {
      
        const code = errRes.error.error.message;
        let message = 'Не получилось зрагитрироваться, попробуйте еще раз';
        if( code === 'EMAIL_EXISTS') {
          message = 'Этот адрес уже зарегистрирован'
        } else if (code === 'EMAIL_NOT_FOUND') {
          message = 'Данные адрес не зарегистрирован'
        } else if (code === 'INVALID_PASSWORD') {
          message = 'Неправильный пароль'
        }
        console.log(message);
      });
  }



  onSwitchAuthModule() {

  }

  onRegistrate() {
    console.log(this.form.value.email)
    const email = this.form.value.email;
    const password = this.form.value.password;
    const title = this.form.value.title;
    
    this.authenticate(email, password, title);
    //this.router.navigateByUrl("/system/maintenance");
  }

  goToLogin(){
   this.router.navigateByUrl("/auth/login")
  }

}
