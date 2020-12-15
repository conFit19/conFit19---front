import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params} from '@angular/router'
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  myParam: number;
  constructor(private route:ActivatedRoute, private service: EventService) { }

  ngOnInit(): void {

    this.route.params.subscribe((params: Params) => this.myParam = params['id'])
  }

}
