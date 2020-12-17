import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-organizator-area',
  templateUrl: './organizator-area.component.html',
  styleUrls: ['./organizator-area.component.css']
})
export class OrganizatorAreaComponent implements OnInit {

  activitiesList: any[] = [];

  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.service.getMyAdminActivities(Number(sessionStorage.getItem('id')))
    .subscribe((data: any) => {
      this.activitiesList = data;
      console.log(this.activitiesList);
    }, error => {error})
  }

}
