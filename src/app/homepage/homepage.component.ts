import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'pf-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick() {
      console.log('dziala');
  }

}