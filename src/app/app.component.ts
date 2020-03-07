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
      if (activeNavbarItem != undefined)
        activeNavbarItem.classList.add("underline");

      if (this.route != '/home') {
        setTimeout(function(){
          if(document.getElementById("dummy")!=null){
            document.getElementById("dummy").classList.add("yes-visibility-2");
            document.getElementById("dummy").classList.remove("no-visibility-2");
          }

        }, 300)
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

// ," Releases:", "Compilations", "Liquid Seed Recordings - ' Seeds of Thought ' compiled by A.i.A", "Track: Deep In Mind - Bicycle Day", "www.liquidseed.net/releases/lsd018…mpiled-by-a-i-a", "Namaha Records - 'Crying Trees' compiled by Ambient Terrorist A.K.A Fishimself", "Track: Deep In Mind - Bat Yam", "www.beatport.com/release/crying-trees/1098407", "Ektoplazm - 'Into This Wired Abyss Volume 2' compiled by Atman Construct", "Track: Deep In Mind - Senses", "www.ektoplazm.com/free-music/into-…ired-abyss-vol-2", "Ektoplaszm - 'Turlitava 2' compiled by Anub1s", "Track: Deep In Mind - Nimphaea Alba", "www.ektoplazm.com/free-music/turlitava-2", "No Label - 'Into This Wired Abyss Volume 1' compiled by Atman Construct", "Track: Deep In Mind - Aura", "intothiswiredabyss.bandcamp.com/", "Uxmal Records - 'When Melancholy speaks' compiled by lemonchill", "Track: Deep In Mind - Nerium Oleander", "www.psyshop.com/shop/CDs/uxm/uxm1cd009.html", "EP", "Plusquam Records - Deep In Mind - Dialogue", "www.psyshop.com/shop/Downloads/plc/plc1dw052.html", "UXMAL Records - Deep In Mind - Guerilla", "pro.beatport.com/release/guerilla/1406063", "Remixes", "Lemonchill - I missed a heartbeat(Deep In Mind remix)", "www.beatport.com/track/i-missed-a…nd-remix/5699949", "Contact", "deepinmindtheband@gmail.com", "@deep_in_mind", "www.youtube.com/user/DeepinMindtheband", "www.facebook.com/pages/Deep-In-Mi…56375250?fref=ts", "www.vimeo.com/user8378697"