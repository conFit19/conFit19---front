import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchanService {

  constructor(private http: HttpClient) {}
  
   showMerchan(){
    return this.http.get('http://localhost:3000/merchan/merchan');
  }
}


