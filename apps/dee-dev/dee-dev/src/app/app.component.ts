import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-redCloud',
    template: '<redCloud></redCloud>'
})
export class AppComponent implements OnInit, AfterViewInit {
    @Output()
    loaded: EventEmitter<boolean> = new EventEmitter();

    constructor() {}

    ngOnInit () {
        $( document ).ready( function () {

        } );
    }

    ngAfterViewInit () {
        this.loaded.emit( true );
    }
}
