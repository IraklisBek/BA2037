import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    data: {
      title: 'BA 2037 | Home',
      description: 'BA 2037 Official Website | Self organized initiative organizing electronic music events, based in Heraklion, Greece',
      ogUrl: 'https://ba2037.com/',
      ogImg: '../assets/Images/play-button.png'
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'artists', component: ArtistsComponent },
  {
    path: 'artists/:name', component: ArtistDetailsComponent
  },
  { path: 'events', component: EventsComponent },
  { path: 'events/:name', component: EventDetailsComponent },
  { path: 'blog', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
