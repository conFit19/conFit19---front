import { Component, OnInit } from '@angular/core';
import { PresencialesService } from 'src/app/services/presenciales.service';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-presenciales',
  templateUrl: './presenciales.component.html',
  styleUrls: ['./presenciales.component.css']
})
export class PresencialesComponent implements OnInit {

  

  activitiesList: any[] = [];
  constructor(private presenciales: PresencialesService, private router: Router ) { }

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


