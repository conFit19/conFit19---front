import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params} from '@angular/router'
import { EventService } from 'src/app/services/event.service';
import { WeatherapiService } from 'src/app/services/weatherapi.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any = {};
  weather: any = {};
  maps: any = {};
  constructor(private route:ActivatedRoute, private service: EventService, private weatherservice: WeatherapiService, private http: HttpClient) { }


  // getMap(coordenadaX, coordenadaY){

  //   return this.http.get(`http://maps.openweathermap.org/maps/2.0/weather/TD2/50/${coordenadaX}/${coordenadaY}&appid=APIKEY`)

  // }

  ngOnInit(): void {

    // En el momento de carga del componente y por tanto de la URL asociada, recogemos los parámetros que tengamos en la URL, el ID del evento a consultar.
    this.route.params.subscribe((params: Params) => {
    
      console.log(params['id'])

      this.service.showEvent(params['id'])
      .subscribe((data: any) => {
        this.event = data;
        console.log(this.event);
        this.weatherservice.getWeather(this.event.place)
          .subscribe((data: any) => {
          this.weather = data;
          console.log('datos de la api del tiempo',this.weather);
            // this.getMap(this.weather.coord.lat,this.weather.coord.lon)
            // .subscribe((data: any)=>{
            //   this.maps = data;
            //   console.log('los datos de los mapas', this.maps)
            // })
    }, error => {error})
      }, error => {error})
    })

    
  }

}
