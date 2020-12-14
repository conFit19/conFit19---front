import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresencialesService {

  actividadesPresenciales:any[] = [];

  constructor(private http: HttpClient) { }

  getAllActivities()  {
    return this.http.get('http://localhost:3000/eventos/presencial')
     
  }
}
