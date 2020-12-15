import { Component, OnInit } from '@angular/core';
import { OrganizereventsService } from 'src/app/services/organizerevents.service';

@Component({
  selector: 'app-organizator-area',
  templateUrl: './organizator-area.component.html',
  styleUrls: ['./organizator-area.component.css']
})
export class OrganizatorAreaComponent implements OnInit {

  activitiesList: any[] = [];

  constructor(private service: OrganizereventsService) { }

  ngOnInit(): void {
    this.service.getMyAdminActivities(1)
    .subscribe((data: any) => {
      this.activitiesList = data;
      console.log(this.activitiesList);
    }, error => {error})
  }

}
