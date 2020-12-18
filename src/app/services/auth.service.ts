import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserInterface = new UserInterface();

  constructor(private http: HttpClient, private router: Router) { }


  login(userObject){
    // PETICION / REQUEST HTTP a localhost:3000/auth hecho
    this.http.post('http://localhost:3000/auth',userObject )
    .subscribe((data: UserInterface) => {
      this.user = data;
      // console.log('Rol',this.user.rol);
      sessionStorage.setItem('rol', this.user.rol);
      sessionStorage.setItem('id', this.user.id);
      sessionStorage.setItem('name', this.user.name);
      
      if(this.user.rol === 'Admin'){
        this.router.navigateByUrl('/organizador');
      }else{
        this.router.navigateByUrl('/usuario');
      }
    }, error => {
      console.log(error);
    })

  }

  isAuthAdmin(): boolean {
    if (sessionStorage.getItem('rol') === 'Admin'){
      return true;
    }else{
      return false;
    }
  }

  isAuthUser(): boolean {
    if (sessionStorage.getItem('rol') === 'User'){
      return true;
    }else{
      return false;
    }
  }
}


  

