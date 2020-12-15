import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeweventService {

  constructor(private http: HttpClient) { }

  addNewEvent(data)  {
    return this.http.post('http://localhost:3000/eventos',data)
     
  }
}
