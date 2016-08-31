import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from "../../shared/google-map.service";

// declare var google: any;

@Component({
    moduleId: module.id,
    selector: 'pf-map-container',
    templateUrl: 'map-container.component.html',
    styleUrls: ['map-container.component.css']
})
export class MapContainerComponent implements OnInit {

    constructor(private googleMapService: GoogleMapService) { }

    ngOnInit() {
        this.googleMapService.initAutocomplete();
    }

}
