import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params} from '@angular/router'
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: any = {};
  maps:any = {};
  constructor(private route:ActivatedRoute, private service: EventService) { }

  ngOnInit(): void {

    // En el momento de carga del componente y por tanto de la URL asociada, recogemos los parámetros que tengamos en la URL, el ID del evento a consultar.
    this.route.params.subscribe((params: Params) => {
    
      console.log(params['id'])

      this.service.showEvent(params['id'])
      .subscribe((data: any) => {
        this.event = data;
        console.log(this.event);
      }, error => {error})
    })

    // this.service.googlemaps('Valencia')
    // .subscribe((data: any) => {
    //   this.maps = data;
    //   console.log(this.maps);
    // }, error => {error})
  }

}
