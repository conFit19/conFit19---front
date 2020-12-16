import { Component, OnInit } from '@angular/core';
import { UserEventsService } from 'src/app/services/user-events.service';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {

  activitiesList: any[] = [];
  
  constructor(private service: UserEventsService) { }

  ngOnInit(): void {
    this.service.getUserActivities(sessionStorage.getItem('id'))
      .subscribe((data: any) => {
        this.activitiesList = data;
        console.log(this.activitiesList);
      }, error => {error})
  }

}
