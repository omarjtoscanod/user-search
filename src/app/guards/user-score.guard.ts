import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GithubService } from '../services/github.service';

@Injectable({
  providedIn: 'root'
})
export class UserScoreGuard implements CanActivate {

  constructor(private githubService: GithubService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const username = route.paramMap.get('username');

    if (username) {
      return this.githubService.getUserDetails(username).then(user => {
        if (user?.score >= 30.0) {
          return true;
        } else {
          alert('Acceso denegado: el score del usuario es menor a 30.');
          this.router.navigate(['/']);
          return false;
        }
      });
    }

    return false;
  }
}

