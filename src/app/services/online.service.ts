import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {

  constructor(private http: HttpClient) { }

  getAllActivities()  {
    return this.http.get('http://localhost:3000/eventos/online')
     
  }
}
