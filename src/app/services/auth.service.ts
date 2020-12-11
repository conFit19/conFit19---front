import { Injectable } from '@angular/core';
import { UserInterface } from '../models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(user: UserInterface){
    if(user.User === 'escritor@articulos.com' && user.contrasena === 'misarticulos'){
      sessionStorage.setItem('auth', 'true');
      return true;
      
    }else {
      return false;
    }
  }

  isAuth(): boolean {
    if (sessionStorage.getItem('auth') === 'true'){
      return true;
    }else{
      return false;
    }
  }
}


  

