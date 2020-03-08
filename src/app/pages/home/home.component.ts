import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { SEOService } from 'src/app/_services/seo.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private title: Title,
    private router: Router,
    private route: ActivatedRoute,
    private _seoService: SEOService
  ) {
    title.setTitle("BA 2037 | Home")
   }

  ngOnInit() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.route),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
     )
     .subscribe((event) => {
       this._seoService.updateTitle(event['title']);
       this._seoService.updateOgUrl(event['ogUrl']);
       this._seoService.updateOgImg(event['ogImg']);
       //Updating Description tag dynamically with title
       this._seoService.updateDescription(event['title'] + event['description'])
     }); 
  }

  public subscribe() {
    var correctInput = this.validateEmail((<HTMLInputElement>document.getElementById("mail")).value)
    if (correctInput) {
      this.toastr.success("Your Subscription had been Successful")

    } else {
      this.toastr.error("Please Enter a Valid E-Mail address")

    }
  }

  private validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  goToFacebook() {
    window.open("https://facebook.com/BA2037/", "_blank");
  }

  goToSoundcloud() {
    window.open("https://soundcloud.com/ba2037/", "_blank");
  }

}
