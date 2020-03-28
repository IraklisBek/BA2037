import { Component, OnInit } from '@angular/core';
import { pulseOnEnterAnimation, fadeInOnEnterAnimation } from 'angular-animations';
import { Title } from '@angular/platform-browser';
import { SEOService } from 'src/app/_services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class AboutComponent implements OnInit {

  constructor(
    private seo: SEOService
  ) {
   }

  ngOnInit() {
    this.seo.generateTags("article", "BA 2037", "BA 2037 | About", "The project consists of people that are interested in music, musicians and Djs with common desire to find space and time in order to listen/play/dance/(re) produce the music that we enjoy. We find ourselves somewhere in the ocean of electronic and experimental music and we would like to access the very depths of it.", "https://thumbnailer.mixcloud.com/unsafe/1200x628/profile/c/1/3/0/cea5-de62-494b-9d46-2f95a8d73d46", "https://ba2037.com")
  }
  goToFacebook() {
    window.open("https://facebook.com/BA2037/", "_blank");
  }

  goToSoundcloud() {
    window.open("https://soundcloud.com/ba2037/", "_blank");
  }
  
  public goToMixcloud() {
    window.open("https://mixcloud.com/BA2037/", "_blank");
  }
}
