import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { GetDataService } from 'src/app/_services/get-data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class BlogComponent implements OnInit {
  public blogs
  constructor(
    private getDataService: GetDataService,
    private title: Title
  ) {
    title.setTitle("BA 2037 | Blog")
   }

  ngOnInit() {
    this.getDataService.getBlog().subscribe(res=>{
      this.blogs = res
    })
  }

}
