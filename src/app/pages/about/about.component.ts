import { Component, OnInit } from '@angular/core';
import { pulseOnEnterAnimation, fadeInOnEnterAnimation } from 'angular-animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class AboutComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    this.title.setTitle("BA 2037 | ?")
   }

  ngOnInit() {
  }
  goToFacebook() {
    window.open("https://facebook.com/BA2037/", "_blank");
  }

  goToSoundcloud() {
    window.open("https://soundcloud.com/ba2037/", "_blank");
  }
}
