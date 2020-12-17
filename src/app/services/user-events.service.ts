import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserEventsService {

  constructor(private http: HttpClient) { }

  getUserActivities(id)  {
    return this.http.get(`http://localhost:3000/registro/userEvents/${id}`)   
  }

  apuntarseEvento(data){
    return this.http.post('http://localhost:3000/registro', data )
  }
}
