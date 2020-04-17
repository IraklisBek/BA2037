import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Location } from '@angular/common';
import { EventModel } from 'src/app/_models/event.model';
import { Title } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { SEOService } from 'src/app/_services/seo.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class EventDetailsComponent implements OnInit {
  public artists
  public event
  public events
  public eventName
  public lives
  public djsets
  public isMobile;
  public scroll
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private title: Title,
    private _seoService: SEOService,
  ) {
   }

  ngOnInit() {
    this.getDevices()
    this.route.queryParams.subscribe(params => {
      this.scroll = params["scroll"]
    })

    this.event = new EventModel
    this.eventName = this.route.snapshot.params['name'];
    this.getDataService.getEvents().subscribe(res => {
      this.events = res
      this.event = this.getDataService.getEvent(res, this.eventName)
      this.title.setTitle("BA 2037 | " + this.event.name)
      this.getDataService.getArtists().subscribe(res=>{
        this.artists = res
        this.lives = this.getDataService.getArtistsOfEventByPerformanceType(this.event, 'live', this.artists )
        this.djsets = this.getDataService.getArtistsOfEventByPerformanceType(this.event, 'djset', this.artists )
        this._seoService.generateTags("article", 
        "BA 2037", 
        "BA 2037 | Event: " + this.event.name, 
        this.event.descriprion, 
        "<%= require('/assets/Images/Events/"+this.event.photo+"') %>", 
        "https://ba2037.com")
      })


    })
  }

  goBack() {
    this.router.navigate(["events"], {
      queryParams: {
        scroll: this.scroll
      }
    })
  }

  goToLink(link) {
    window.open(link, "_blank");
  }

  getDevices() {
    this.isMobile = this.getDataService.getDevice().isMobile
  }

}
