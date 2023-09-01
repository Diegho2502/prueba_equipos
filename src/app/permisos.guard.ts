import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.hasUser()){
        return true;

      }
    alert("No tiene permiso")
    return false;
  }
  
  hasUser(): boolean { 
    let dato = localStorage.getItem('login');
    if (dato=="true") {
      return true;
    } else {
      return false;
    }    
  }

}
