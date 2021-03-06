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
      this._seoService.generateTags("article", 
      "BA 2037", 
      "BA 2037 | Artist:" + this.artist.name, 
      this.artist.descriprion, 
      "<%= require('/assets/Images/Artists/"+this.artist.photo+"') %>", 
      "https://ba2037.com")
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
