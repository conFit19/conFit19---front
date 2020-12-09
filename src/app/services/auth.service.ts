import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/internal/Observable'
import {map} from 'rxjs/operators'
import {isNullOrUndefined} from 'util';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
   "Content-type":"aplication/json"
  });
  loginuser(user:string,contrasena:string): Observable<any>{
    const url_api = "http://localhost:3000/users/login";
    return this.http.post(url_api,{user,contrasena},{headers:this.headers})
  
  };
  setUser(user):void{
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser',user_string)

  }
  setToken(token):void{
    localStorage.setItem("accessToken",token)
  }
  getToken(){
    return localStorage.getItem("accessToken");
  }
  getCurrentUser(){
    let user_string = localStorage.getItem('currentUser');
    if (isNullOrUndefined(user_string)){
      let user= JSON.parse(user_string);
      return user;

    }
    else{
      return null;
    }
  }


  
}
