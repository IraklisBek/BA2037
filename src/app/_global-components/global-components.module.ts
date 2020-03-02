import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ArtistComponent } from './artist/artist.component';
import { EventComponent } from './event/event.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ArtistComponent,
    EventComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ArtistComponent,
    BlogComponent
  ]
})
export class GlobalComponentsModule { }
