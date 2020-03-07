import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from 'src/app/_global-components/_models/artist.model';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class ArtistDetailsComponent implements OnInit {
  @Input() artist
  public artists
  //public artist: ArtistModel
  public artistName
  public isMobile;
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDevices()
    setInterval(function(){
      var parentWidth = document.getElementById("container").offsetWidth
      var artistDetails = document.getElementsByClassName("child") as HTMLCollectionOf<HTMLElement>;
      for (var i = 0; i < artistDetails.length; i++) {
        artistDetails[i].style.width = (parentWidth + "px");
      }
    })

    // this.artist = new ArtistModel
    // this.artistName = this.route.snapshot.params['name'];
    // this.getDataService.getArtists().subscribe(res => {
    //   this.artists = res
    //   this.artist = this.getDataService.getArtist(res, this.artistName)
    // })
  }

  goBack() {
    document.getElementById("details_" + this.artist.id).classList.add("no-visibility-2")
    document.getElementById("details_" + this.artist.id).classList.remove("yes-visibility-2")
    document.getElementById("artistsLiveHeader").classList.remove("no-visibility-2")
    document.getElementById("artistsLiveHeader").classList.add("yes-visibility-2")
    document.getElementById("artistsLive").classList.remove("no-visibility-2")
    document.getElementById("artistsLive").classList.add("yes-visibility-2")
    document.getElementById("artistsDJSetsHeader").classList.remove("no-visibility-2")
    document.getElementById("artistsDJSetsHeader").classList.add("yes-visibility-2")
    document.getElementById("artistsDJSets").classList.remove("no-visibility-2")
    document.getElementById("artistsDJSets").classList.add("yes-visibility-2")
    //this.location.back()
  }

  goToLink(link) {
    window.open(link, "_blank");
  }

  getDevices(){
    this.isMobile = this.getDataService.getDevice().isMobile
  }
}
