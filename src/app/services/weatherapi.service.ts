import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http: HttpClient) { }

  key: string = "a460c7f006e7bcde381082ee230ef0bc"


  getWeather(city)  {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric&lang=sp`)  
  }
}
