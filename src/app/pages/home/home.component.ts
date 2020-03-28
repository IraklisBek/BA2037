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
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private toastr: ToastrService,
    private _seoService: SEOService,
    public getDatService: GetDataService,
    private firestore:AngularFirestore,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.resetForm()
    this._seoService.generateTags("article", 
    "BA 2037", 
    "BA 2037 | Home", 
    "BA 2037 Official Website - The target is the organization of electronic music events and the cooperation with other equivalent groups, teams and initiatives that exists in Heraklion which serves the same goals, modes of operation and existence.    ", 
    "https://thumbnailer.mixcloud.com/unsafe/1200x628/profile/c/1/3/0/cea5-de62-494b-9d46-2f95a8d73d46", 
    "https://ba2037.com")
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

  public goToMixcloud() {
    window.open("https://mixcloud.com/BA2037/", "_blank");
  }

  public goToAbout() {
    this.router.navigate(['/about'])
  }


}
