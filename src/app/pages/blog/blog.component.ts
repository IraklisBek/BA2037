import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
