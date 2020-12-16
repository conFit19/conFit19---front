import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router){}
  
  canActivate(): boolean{
    if (this.authService.isAuthAdmin() ){
      return true;
      console.log('acceso correcto');
    }else{
    console.log('acceso denegado');
    this.router.navigateByUrl('/login');
    return false;
    }

    console.log('acceso denegado');
    return false;
  }
  
}
