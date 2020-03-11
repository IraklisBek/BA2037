import { Component, OnInit, ɵConsole } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { SEOService } from 'src/app/_services/seo.service';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { GetDataService } from 'src/app/_services/get-data.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private toastr: ToastrService,
    private title: Title,
    private _seoService: SEOService,
    public getDatService: GetDataService,
    private firestore:AngularFirestore
  ) {
    title.setTitle("BA 2037 | Home")
  }

  ngOnInit() {
    // this.router.events.pipe(
    //   filter((event) => event instanceof NavigationEnd),
    //   map(() => this.route),
    //   map((route) => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   filter((route) => route.outlet === 'primary'),
    //   mergeMap((route) => route.data)
    // )
    //   .subscribe((event) => {
    this.resetForm()
    this._seoService.updateOgUrl("https://ba2037.com/");
    this._seoService.updateOgImg("${require(`/assets/Images/logo.png`)}");
    this._seoService.updateDescription("BA 2037 Official Website | Self organized initiative organizing electronic music events, based in Heraklion, Greece")
    // });
  }

  public resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.getDatService.formData = {
      id: null,
      email: ""
    }
  }

  public subscribe(form: NgForm) {
    let data = form.value;
    console.log(data)
    var correctInput = this.validateEmail(data.email)
    if (correctInput) {
      this.firestore.collection('emails').add(data)
      this.toastr.success("Your Subscription had been Successful")
    } else {
      this.toastr.error("Please Enter a Valid E-Mail address")
    }
    this.resetForm(form)
  }

  public validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public goToFacebook() {
    window.open("https://facebook.com/BA2037/", "_blank");
  }

  public goToSoundcloud() {
    window.open("https://soundcloud.com/ba2037/", "_blank");
  }



}
