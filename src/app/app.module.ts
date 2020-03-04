import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './_global-components/navbar/navbar.component';
import { ArtistComponent } from './_global-components/artist/artist.component';
import { AboutComponent } from './pages/about/about.component';
import { GlobalComponentsModule } from './_global-components/global-components.module';
import { ArtistsComponent } from './pages/artists/artists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArtistsComponent,
    EventsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GlobalComponentsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
