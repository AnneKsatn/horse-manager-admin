import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, identity, of } from 'rxjs';
import { take, tap, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService,
    private router: Router) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.getToken()) {
      return true
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
