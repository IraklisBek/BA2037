import { Component, OnInit } from '@angular/core';
import { ArtistModel } from 'src/app/_global-components/_models/artist.model';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class ArtistDetailsComponent implements OnInit {
  public artists
  public artist: ArtistModel
  public artistName
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.artist = new ArtistModel
    this.artistName = this.route.snapshot.params['name'];
    this.getDataService.getArtists().subscribe(res => {
      this.artists = res
      this.artist = this.getDataService.getArtist(res, this.artistName)
      console.log(this.artist)
    })
  }

  goBack(){
    console.log("back")
    this.location.back()
  }

  goToLink(link){
    window.open(link, "_blank");
  }
}
