import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'pf-map-container',
    templateUrl: 'map-container.component.html',
    styleUrls: ['map-container.component.css']
})
export class MapContainerComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;

}
