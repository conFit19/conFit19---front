import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-presenciales',
  templateUrl: './presenciales.component.html',
  styleUrls: ['./presenciales.component.css']
})
export class PresencialesComponent implements OnInit {

  

  activitiesList: any[] = [];
  constructor(private presenciales: EventService, private router: Router ) { }

  ngOnInit(): void {
    this.presenciales.getAllActivitiesPresenciales()
    .subscribe((data: any) => {
      this.activitiesList = data;
      console.log(this.activitiesList);
    }, error => {error})
  }

  detailEvent(id){
    console.log(id);
    this.router.navigate(["/evento", id]);
  }

}


