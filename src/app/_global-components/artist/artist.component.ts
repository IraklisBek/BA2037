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
    document.getElementById("details_"+this.artist.id).classList.remove("no-visibility-2")
    document.getElementById("details_"+this.artist.id).classList.add("yes-visibility-2")
    document.getElementById("artistsLiveHeader").classList.add("no-visibility-2")
    document.getElementById("artistsLiveHeader").classList.remove("yes-visibility-2")
    document.getElementById("artistsLive").classList.add("no-visibility-2")
    document.getElementById("artistsLive").classList.remove("yes-visibility-2")
    document.getElementById("artistsDJSetsHeader").classList.add("no-visibility-2")
    document.getElementById("artistsDJSetsHeader").classList.remove("yes-visibility-2")
    document.getElementById("artistsDJSets").classList.add("no-visibility-2")
    document.getElementById("artistsDJSets").classList.remove("yes-visibility-2")
    //this.router.navigate(["artists/" + this.artist.name])
  }
}
