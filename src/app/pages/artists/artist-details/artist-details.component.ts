import { Component, OnInit, Input } from '@angular/core';
import { ArtistModel } from 'src/app/_models/artist.model';
import { GetDataService } from 'src/app/_services/get-data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { SEOService } from 'src/app/_services/seo.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
  animations: [fadeInOnEnterAnimation()]
})
export class ArtistDetailsComponent implements OnInit {
  public artist
  public artists
  public artistName
  public isMobile;
  public scroll
  constructor(
    private getDataService: GetDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private title: Title,
    private _seoService: SEOService
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
      //this.title.setTitle("BA 2037 | " + this.artist.name)
      this._seoService.updateTitle("BA 2037 | " + this.artist.name);
      this._seoService.updateOgUrl("https://ba2037.com/artists/"+this.artist.name);
      this._seoService.updateOgImg("${require(`/assets/Images/Artists/"+this.artist.photo+"`)}");
      this._seoService.updateOgType("profile")
      this._seoService.updateMusicMusician(this.artist.facebook)
      this._seoService.updateDescription(this.artist.description.join(' '))
      // this.router.events.pipe(
      //   filter((event) => event instanceof NavigationEnd),
      //   map(() => this.route),
      //   map((route) => {
      //     while (route.firstChild) route = route.firstChild;
      //     return route;
      //   }),
      //   filter((route) => route.outlet === 'primary'),
      //   mergeMap((route) => route.data)
      //  )
      //  .subscribe((event) => {
      //    this._seoService.updateTitle("BA 2037 | " + this.artist.name);
      //    this._seoService.updateOgUrl("https://ba2037.com/artists/"+this.artist.name);
      //    this._seoService.updateOgImg("${require(`/assets/Images/Artists/`"+this.artist.photo+"``)}"   );
      //    this._seoService.updateOgType("profile")
      //    this._seoService.updateMusicMusician(this.artist.facebook)
      //    this._seoService.updateDescription(this.artist.description.join(' '))
      //  }); 
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
