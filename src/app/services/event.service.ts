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

  // crea un nuevo evento
  addNewEvent(data)  {
    return this.http.post('http://localhost:3000/eventos',data)
  }

  // filtra actividades por ubicación online
  getAllActivitiesOnline()  {
    return this.http.get('http://localhost:3000/eventos/online');  
  }
  // filtra actividades por ubicacion presencial
  getAllActivitiesPresenciales()  {
    return this.http.get('http://localhost:3000/eventos/presencial')
     
  }
  // filtra las actividades que ha creado el Admin
  getMyAdminActivities(id) {
    return this.http.get(`http://localhost:3000/eventos/myEvents/${id}`) 
  }

}
