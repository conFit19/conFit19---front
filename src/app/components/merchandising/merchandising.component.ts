import { Component, OnInit } from '@angular/core';
import { MerchanService, Product } from 'src/app/services/merchan.service';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css']
})
export class MerchandisingComponent implements OnInit {

  catalogo: Product[] = []
  constructor(private service: MerchanService) { }

  ngOnInit(): void {

    this.catalogo = this.service.showMerchan();
  }

}
