import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
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
