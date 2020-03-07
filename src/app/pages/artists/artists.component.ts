import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class ArtistsComponent implements OnInit {
  public artists
  public artistsLive
  public artistsDJSet
  constructor(
    private dataService: GetDataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      setTimeout(function () {
        if (params["scroll"] != undefined) {
          window.scrollTo(0, params["scroll"])
        }
      }, 100)

    })
    this.dataService.getArtists().subscribe(res => {
      this.artists = res;
      this.dataService.sortArtistsAlphabetically(this.artists)
      this.artistsLive = this.dataService.getArtistsType(this.artists, 'live');
      this.artistsDJSet = this.dataService.getArtistsType(this.artists, 'djset');
    })
  }

}
