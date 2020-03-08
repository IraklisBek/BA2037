import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { EventModel } from 'src/app/_global-components/_models/event.model';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class EventsComponent implements OnInit {
  public events
  public sundays
  public saturdays
  public parties

  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private title: Title
  ) {
    title.setTitle("BA 2037 | Events")
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      setTimeout(function () {
        if (params["scroll"] != undefined) {
          window.scrollTo(0, params["scroll"])
        }
      }, 100)
    })
    this.getDataService.getEvents().subscribe(res=>{
      this.events = res
      this.sundays = this.getDataService.getEventsType(this.events, 'sunday')
      this.saturdays = this.getDataService.getEventsType(this.events, 'saturday')
      this.parties = this.getDataService.getEventsType(this.events, 'party')
    })
  }

}
