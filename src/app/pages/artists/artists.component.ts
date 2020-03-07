import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { GetDataService } from 'src/app/_services/get-data.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class ArtistsComponent implements OnInit {
  private artists
  public artistsLive
  public artistsDJSet
  constructor(
    private dataService: GetDataService
  ) { }

  ngOnInit() {
    this.dataService.getArtists().subscribe(res=>{
      this.artists = res;
      this.artistsLive = this.dataService.getArtistsType(this.artists, 'live');
      this.artistsDJSet = this.dataService.getArtistsType(this.artists, 'djset');
    })
  }

}
