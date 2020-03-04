import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private route: string;
  private blur_bg
  constructor(
    private router: Router,
    private location: Location,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
    this.blur_bg = document.getElementById("blur_bg")
    this.router.events.subscribe(val => {
      this.route = this.location.path();

      var activeRoute = this.route.substr(1);
      var activeNavbarItem = document.getElementById(activeRoute)
      var menu = document.getElementById("my-menu");
      var menuItems = menu.getElementsByTagName('div');

      for (var i = 0; i < menuItems.length; i++) {
        var childDiv = menuItems[i];
        childDiv.classList.remove("underline")
      }
      activeNavbarItem.classList.add("underline");

      if (this.route != '/home') {
        this.blur_bg.classList.add("yes-visibility-2");
        this.blur_bg.classList.remove("no-visibility-2");
        menu.classList.remove("menu-home")
        menu.classList.add("menu")
        for (var i = 0; i < menuItems.length; i++) {
          var childDiv = menuItems[i];
          childDiv.classList.remove("menu-item-home")
          childDiv.classList.add("menu-item")
        }
      } else {
        this.blur_bg.classList.remove("yes-visibility-2");
        this.blur_bg.classList.add("no-visibility-2");
        menu.classList.add("menu-home")
        menu.classList.remove("menu")
        for (var i = 0; i < menuItems.length; i++) {
          var childDiv = menuItems[i];
          childDiv.classList.add("menu-item-home")
          childDiv.classList.remove("menu-item")
        }
      }
    });
  }

}