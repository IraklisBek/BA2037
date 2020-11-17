import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { GetDataService } from 'src/app/_services/get-data.service';
import { Title } from '@angular/platform-browser';
import { SEOService } from 'src/app/_services/seo.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { EventModel } from 'src/app/_models/event.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class BlogComponent implements OnInit {
  public blogs
  top
  events
  constructor(
    private getDataService: GetDataService,
    private title: Title,
    private _seoService: SEOService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    var _this = this
    window.addEventListener("scroll", function (event) {
      _this.top = this.scrollY
    }, false);
    this._seoService.generateTags("article",
      "BA 2037",
      "BA 2037 | Blog",
      "Posts reference to the events and the equivelant spaces they are taking place like Stoa 60, Euaggelismos Squat, University of Crete and more",
      "https://thumbnailer.mixcloud.com/unsafe/1200x628/profile/c/1/3/0/cea5-de62-494b-9d46-2f95a8d73d46",
      "https://ba2037.com")
    this.getDataService.getBlog().subscribe(res => {
      this.blogs = res
    })
    this.getEvents();
  }
  goToEvent(event_id: string) {
    var event = this.getEvent(event_id);
    this.router.navigate(["events/" + event.name], {
      queryParams: {
        scroll: this.top
      }
    })
  }

  getEvents() {
    this.getDataService.getEvents().subscribe(res => {
      this.events = res
    })
  }

  getEvent(event_id: string) {
    if(this.events){
      return this.getDataService.getEventByID(this.events, event_id)
    }else{
      return "name"
    }
  }
}
