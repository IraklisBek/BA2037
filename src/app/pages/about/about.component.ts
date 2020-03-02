import { Component, OnInit } from '@angular/core';
import { pulseOnEnterAnimation, fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
