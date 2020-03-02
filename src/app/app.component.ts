import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

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
  ) {
  }

  ngOnInit() {
    this.blur_bg = document.getElementById("blur_bg")
    this.router.events.subscribe(val => {
      this.route = this.location.path();
      var menu = document.getElementById("my-menu");
      var menuItems = menu.getElementsByTagName('div');

      if (this.route != '/home') {
        document.getElementById("subscribe").style.display="none"
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
        document.getElementById("subscribe").style.display="block"
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