import { Component, OnInit, Input } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class EventComponent implements OnInit {
  @Input() event
  top
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    var _this = this
    window.addEventListener("scroll", function (event) {
      _this.top = this.scrollY
    }, false);
  }

  enter() {
    console.log("das")
    document.getElementById(this.event.id).classList.add("blur-on-text-hover")
  }

  leave() {
    document.getElementById(this.event.id).classList.remove("blur-on-text-hover")
  }

  goToEvent() {
    this.router.navigate(["events/" + this.event.name], {
      queryParams: {
        scroll: this.top
      }
    })
  }

}
