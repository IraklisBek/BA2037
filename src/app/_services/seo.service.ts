import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SEOService {
  constructor(private title: Title, private meta: Meta) { }

  generateTags(type, site_name, title, description, image, url){
    this.title.setTitle(title);
    this.meta.updateTag({property: 'og:type', content: type})
    this.meta.updateTag({property: 'og:site_name', content: site_name})
    this.meta.updateTag({property: 'og:title', content: title})
    this.meta.updateTag({property: 'og:description', content: description})
    this.meta.updateTag({property: 'og:image', content: image})
    this.meta.updateTag({property: 'og:url', content: url})
    this.meta.updateTag({name: 'description', content: description})
  }

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