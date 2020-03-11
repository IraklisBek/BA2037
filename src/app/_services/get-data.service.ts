import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArtistModel } from '../_models/artist.model';
import { EventModel } from '../_models/event.model';
import { Email } from '../_models/email.model';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  public formData: Email

  artistsUrl = 'assets/data/artists.json';
  eventsUrl = 'assets/data/events.json';
  blogUrl = 'assets/data/blog.json';


  constructor(private http: HttpClient) { }

  getArtists() {
    return this.http.get(this.artistsUrl);
  }

  getArtist(artists, artistName){
    var artist = artists.filter(e => e.name == artistName)
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


  getEvents() {
    return this.http.get(this.eventsUrl);
  }

  getEvent(events, eventName){
    var event = events.filter(e => e.name == eventName)
    return event[0]
  }

  getEventsType(events: EventModel[], type){
    var eventType = []
    for (let event of events){
      if(event.type==type){
        eventType.push(event)
      }
    }
    return eventType
  }

  getArtistsOfEventByPerformanceType(event, performanceType, artists){
    var returnArtists = []
    for(let artist of event.artists){
      var getArtist = this.getArtist(artists, artist)
      if(getArtist.type==performanceType){
        returnArtists.push(getArtist)
      }
    }
    return returnArtists
  }


  getBlog() {
    return this.http.get(this.blogUrl);
  }








  sortArtistsAlphabetically(artists){
    artists.sort(this.sortArtists)
  }

  private sortArtists(a, b) {
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
