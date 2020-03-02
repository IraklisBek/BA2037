import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class ArtistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
