import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
