import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrganizereventsService {

  constructor(private http: HttpClient) {}

  getMyAdminActivities(id) {
    return this.http.get(`http://localhost:3000/eventos/myEvents/${id}`) 
  }
}
