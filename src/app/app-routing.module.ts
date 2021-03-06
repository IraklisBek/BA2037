import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ArtistsComponent } from './pages/artists/main/artists.component';
import { EventsComponent } from './pages/events/main/events.component';
import { BlogComponent } from './pages/blog/main/blog.component';
import { ArtistDetailsComponent } from './pages/artists/artist-details/artist-details.component';
import { EventDetailsComponent } from './pages/events/event-details/event-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent},
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
