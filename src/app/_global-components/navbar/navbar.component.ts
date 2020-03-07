import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private openMenu: boolean = false;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setInterval(function(){
      var parentWidth = document.getElementById("container").offsetWidth
      var menu = document.getElementById("my-menu").style.width = parentWidth + "px"
    }, 1)


  }

  goToPage(page) {
    this.router.navigate([page])
  }
  goToStoa60() {
    window.open("https://stoa60blog.wordpress.com/", "_blank");
  }
}
