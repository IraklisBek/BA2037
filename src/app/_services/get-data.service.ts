import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistModel } from '../_global-components/_models/artist.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  artistsUrl = 'assets/data/artists.json';


  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(this.artistsUrl);
  }

  getArtist(artists, artistName){
    var artist = artists.filter(e => e.name == artistName)
    console.log(artist)
    return artist[0]
  }

  getArtistsType(artists: ArtistModel[], type){
    var artistsType = []
    for (let artist of artists){
      if(artist.type==type){
        artistsType.push(artist)
      }
    }
    this.sortArtistsAlphabetically(artistsType)
    return artistsType
  }

  sortArtistsAlphabetically(artists){
    artists.sort(this.compare)
  }

  private compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  public getDevice() {
    var MOBILE_MAX_WIDTH = 425;  //Adjust as needed
    var TABLET_MAX_WIDTH = 1024; //Adjust as needed
    var DESKTOP_MAX_WIDTH = 2305; //Adjust as needed

    return {
      isMobile: window.screen.width <= MOBILE_MAX_WIDTH,
      isTablet: window.screen.width <= TABLET_MAX_WIDTH && window.screen.width > MOBILE_MAX_WIDTH,
      isDesktop: window.screen.width <= DESKTOP_MAX_WIDTH && window.screen.width > MOBILE_MAX_WIDTH && window.screen.width > TABLET_MAX_WIDTH
    }
  }
}
