import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { BehaviorSubject, from, identity, Observable } from 'rxjs';
import { User } from './user.model';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core'
import { AngularFirestore } from '@angular/fire/firestore';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { SERVER_API_URL } from '../app.constants';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}



export class Login {
  constructor(
    public username: string,
    public password: string,
    public rememberMe: boolean,
  ) { }
}

type JwtToken = {
  id_token: string;
  id_user: string
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public resourceUrl = SERVER_API_URL + 'api/authenticate';

  constructor(private http: HttpClient,
    private $localStorage: LocalStorageService,
    private $sessionStorage: SessionStorageService) { }


  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
      environment.firebaseConfig.apiKey
      }`, { email: email, password: password, returnSecureToken: true })
      .pipe(tap(this.setUserData.bind(this)))
  }


  login(username: string, password: string, rememberMe = false): Observable<void> {
    return this.http
      .post<JwtToken>(this.resourceUrl, { username, password, rememberMe })
      .pipe(map(
        this.setUserData.bind(this)
      ));
  }


  logout() {
    return new Observable(observer => {
      this.$localStorage.clear('authenticationToken');
      this.$sessionStorage.clear('authenticationToken');

      this.$localStorage.clear('user');
      this.$sessionStorage.clear('user');
      observer.complete();
    });
  }

  getToken(): string {
    return this.$localStorage.retrieve('authenticationToken') || this.$sessionStorage.retrieve('authenticationToken') || '';
  }

  getUserID(): number {
    return this.$localStorage.retrieve('user') || this.$sessionStorage.retrieve('user') || '';
  }

  private setUserData(userData: JwtToken) {

    let rememberMe = false;
    const jwt = userData.id_token;
    const id = userData.id_user;

    if (rememberMe) {
      this.$localStorage.store('authenticationToken', jwt);
      this.$localStorage.store('user', id);
    } else {
      this.$sessionStorage.store('authenticationToken', jwt);
      this.$sessionStorage.store('user', id);
    }
  }
}
