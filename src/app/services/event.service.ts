import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  showEvent(id){
    return this.http.get(`http://localhost:3000/eventos/detailevent/${id}`);
  }

  apuntarseEvento(data){
    return this.http.post('http://localhost:3000/registro', data )
  }

}
