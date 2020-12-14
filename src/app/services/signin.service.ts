import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) {

  }

  addNewUser(data)  {
    return this.http.post('http://localhost:3000/user',data)
     
  }
}
