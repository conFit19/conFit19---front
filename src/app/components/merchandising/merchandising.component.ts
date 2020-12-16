import { Component, OnInit } from '@angular/core';
import { MerchanService } from 'src/app/services/merchan.service';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css']
})
export class MerchandisingComponent implements OnInit {

  catalogo: any[] = []
  constructor(private service: MerchanService) { }

  ngOnInit(): void {

    this.service.showMerchan()
      .subscribe((data: any) => {
        this.catalogo = data;
        // console.log(this.catalogo);
      }, error => {error});
  }

}
