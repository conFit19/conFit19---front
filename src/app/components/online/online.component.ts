import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnlineService } from 'src/app/services/online.service';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {

  activitiesList: any[] = [];
  constructor(private presenciales: OnlineService, private router: Router) { }

  ngOnInit(): void {
    this.presenciales.getAllActivities()
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
