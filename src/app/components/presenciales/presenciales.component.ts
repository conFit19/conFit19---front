import { Component, OnInit } from '@angular/core';
import { PresencialesService } from 'src/app/services/presenciales.service';


@Component({
  selector: 'app-presenciales',
  templateUrl: './presenciales.component.html',
  styleUrls: ['./presenciales.component.css']
})
export class PresencialesComponent implements OnInit {

  activitiesList: any[] = [];
  constructor(private presenciales: PresencialesService ) { }

  ngOnInit(): void {
    this.presenciales.getAllActivities()
    .subscribe((data: any) => {
      this.activitiesList = data;
      console.log(this.activitiesList);
    }, error => {error})
  }

}


