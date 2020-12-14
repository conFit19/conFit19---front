import { Component, OnInit } from '@angular/core';
import { OnlineService } from 'src/app/services/online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  activitiesList: any[] = [];
  constructor(private presenciales: OnlineService ) { }

  ngOnInit(): void {
    this.presenciales.getAllActivities()
    .subscribe((data: any) => {
      this.activitiesList = data;
      console.log(this.activitiesList);
    }, error => {error})
  }

}
