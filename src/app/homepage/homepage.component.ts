import { Component, OnInit } from '@angular/core';
import { SafeStyle, DomSanitizationService } from '@angular/platform-browser';
import { AuthService } from "../shared/auth.service";


@Component({
  moduleId: module.id,
  selector: 'pf-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: string[] = ['bg-1.jpg', 'bg-.jpg', 'bg-3.jpg', 'bg-4.jpg', 'bg-5.jpg', 'bg-6.jpg'];
  bg: string;

  constructor(private authService: AuthService) { }

  ngOnInit():any {
      this.bg = this.getBg();
  }

  isAuth() {
      return this.authService.isAuthenticated();
  }

  onLogout() {
      this.authService.signOut();
  }

  getBg() {
    let random = Math.floor((Math.random() * this.images.length) + 1);
    return "url('../assets/images/bg-" + random + ".jpg')";
  }
}
