import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/artists.component';
import { EventsComponent } from './pages/events/events.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArtistDetailsComponent } from './pages/artist-details/artist-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artists/:name', component: ArtistDetailsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'blog', component: BlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
