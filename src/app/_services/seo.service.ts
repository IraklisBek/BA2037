import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SEOService {
  constructor(private title: Title, private meta: Meta) { }


  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateOgImg(img: string) {
    this.meta.updateTag({ name: 'og:img', content: img })
  }

  updateOgType(type: string) {
    this.meta.updateTag({ name: 'og:type', content: type })
  }

  updateMusicMusician(musician: string) {
    this.meta.updateTag({ name: 'music:musician', content: musician })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }
}