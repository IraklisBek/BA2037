import { Component, OnInit, Input } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class ArtistComponent implements OnInit {
  @Input() artist
  top
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    var _this = this
    window.addEventListener("scroll", function (event) {
      _this.top = this.scrollY
    }, false);
  }

  enter() {
    console.log("das")
    document.getElementById(this.artist.id).classList.add("blur-on-text-hover")
  }

  leave() {
    document.getElementById(this.artist.id).classList.remove("blur-on-text-hover")
  }

  goToArtist() {
    this.router.navigate(["artists/" + this.artist.name], {
      queryParams: {
        scroll: this.top
      }
    })
  }
}
