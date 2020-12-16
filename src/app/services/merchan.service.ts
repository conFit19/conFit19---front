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
  createProduct() {
    // recuperaremos el token del session/local Storage para poder hacer la petición al backend con la cabecera del token
  }
}


