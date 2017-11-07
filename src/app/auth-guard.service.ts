import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private authservice: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authservice.isAuthenticated()
        .then(
            (authenticated: boolean) => {
                if(authenticated) {
                    return true;
                } else {
                    this.router.navigate(['/']);
                    return false;
                }
            }
        );
    }
}
