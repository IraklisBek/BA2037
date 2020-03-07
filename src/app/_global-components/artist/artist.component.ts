import { Component, OnInit, Input } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class ArtistComponent implements OnInit {
  @Input() artist

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  enter() {
    console.log("das")
    document.getElementById(this.artist.id).classList.add("blur-on-text-hover")
  }

  leave() {
    document.getElementById(this.artist.id).classList.remove("blur-on-text-hover")
  }

  goToArtist() {
    this.router.navigate(["artists/" + this.artist.name])
  }
}
