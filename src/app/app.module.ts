import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/main/artists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './pages/events/main/events.component';
import { BlogComponent } from './pages/blog/main/blog.component';
import { ToastrModule } from 'ngx-toastr';
import { GetDataService } from './_services/get-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ArtistDetailsComponent } from './pages/artists/artist-details/artist-details.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';
import { SEOService } from './_services/seo.service';
import { ArtistComponent } from './pages/artists/artist/artist.component';
import { EventComponent } from './pages/events/event/event.component';
import { PostComponent } from './pages/blog/post/post.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ArtistsComponent,
    ArtistComponent,
    EventsComponent,
    EventComponent,
    BlogComponent,
    PostComponent,
    ArtistDetailsComponent,
    EventDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(), // ToastrModule added
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [GetDataService, SEOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
