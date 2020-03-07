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
  public scroll
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router

  ) { }

  ngOnInit() {
    this.getDevices()
    this.route.queryParams.subscribe(params => {
      this.scroll = params["scroll"]
    })

    this.artist = new ArtistModel
    this.artistName = this.route.snapshot.params['name'];
    this.getDataService.getArtists().subscribe(res => {
      this.artists = res
      this.artist = this.getDataService.getArtist(res, this.artistName)
    })
  }

  goBack() {
    this.router.navigate(["artists"], {
      queryParams: {
        scroll: this.scroll
      }
    })
  }

  goToLink(link) {
    window.open(link, "_blank");
  }

  getDevices() {
    this.isMobile = this.getDataService.getDevice().isMobile
  }
}
