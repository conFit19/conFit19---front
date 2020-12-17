import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  nuevoRegistro: any = {};
  event: any = {};
  weather: any = {};
  maps: any = {};
  constructor(private route:ActivatedRoute, private service: EventService, private weatherservice: WeatherapiService, private http: HttpClient, private router: Router) { }


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
  suscribeEvent(EventId){
    // let myNewEvent = this.thisNewEvent.value;

    let data = {UserId : sessionStorage.getItem('id'),
                EventId: EventId}
    
    this.service.apuntarseEvento(data)
      .subscribe((data: any) => {
        this.nuevoRegistro = data;
        console.log(this.nuevoRegistro);
        alert('Te has apuntado al evento!')
      }, error => {
        console.error(error)
      })
    this.router.navigateByUrl('/usuario')
  }
}
