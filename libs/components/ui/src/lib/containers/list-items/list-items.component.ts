import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';

window.addEventListener( "orientationchange", function () {
    let orientation = screen.orientation.angle;
    let toolbar = document.querySelector( '.toolbar' );
    if ( orientation === 90 ) {
        // landscape
        toolbar.classList.remove( 'portrait' );
        toolbar.classList.add( 'landscape' );
    } else if ( orientation === 0 ) {
        // portrait
        toolbar.classList.remove( 'landscape' );
        toolbar.classList.add( 'portrait' );
    }
} );

@Component( {
    selector: 'dee-dev-list-items',
    templateUrl: './list-items.component.html',
    styleUrls: ['./list-items.component.css']
} )
export class ListItemsComponent implements OnInit, OnChanges, AfterViewInit {
    aboutImage: string;
    contactImage: string;
    skillsImage: string;
    showcaseImage: string;
    homeImage: string;
    activeMenuItem;
    localState;
    activeHover;
    toolbar;

    @Input()
    landingState: StateConfig;
    @Output()
    state: EventEmitter<void> = new EventEmitter();

    constructor ( private el: ElementRef, @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.aboutImage = images.icons.about;
        this.contactImage = images.icons.contact;
        this.skillsImage = images.icons.skills;
        this.showcaseImage = images.icons.showcase;
        this.homeImage = images.icons.home;
        this.localState = this.landingState;
    }

    ngOnInit () {
    }

    ngOnDestroy () {
    }

    ngOnChanges () {
        if ( this.landingState !== this.localState ) {
            this.changeState();
        }
        this.screenOrientationChange();
    }

    ngAfterViewInit () {
        this.screenOrientationChange();
    }

    screenOrientationChange () {
        let orientation = screen.orientation.angle;
        this.toolbar = document.querySelector( '.toolbar' );
        if ( orientation === 90 ) {
            // landscape
            this.toolbar.classList.remove( 'portrait' );
            this.toolbar.classList.add( 'landscape' );
        } else if ( orientation === 0 ) {
            // portrait
            this.toolbar.classList.remove( 'landscape' );
            this.toolbar.classList.add( 'portrait' );
        }
    }

    changeState() {
        this.localState = this.landingState;
    }

    mouseenter ( item ) {
        this.activeMenuItem = document.querySelector( `.menu-item${ item }` );
        this.activeMenuItem.classList.add( 'hovering' );
        this.activeHover = item;
    }

    mouseleave ( item ) {
        this.activeMenuItem = document.querySelector( `.menu-item${ item }` );
        this.activeMenuItem.classList.remove( 'hovering' );
        this.activeHover = null;
    }

    click ( item, index ) {
        let iconContainer;
        let temp = document.querySelectorAll( '.active' );

        for ( let x = 0; x < temp.length; x++ ){
            if (temp[x]) temp[x].classList.remove( 'active' );
        }

        this.activeMenuItem = document.querySelector( `${ item }` );
        this.activeMenuItem.classList.add( 'clicked' );
        iconContainer = document.querySelector( `${ item }-icon-container` );
        iconContainer.style.overflow = 'visible';

        for ( let i = 0; i < 5; i++ ) {
            if ( index === i ) {
                this.localState = { ...this.landingState, menu: { activeMenu: i, lastMenuClicked: i } };
                this.state.emit( { ...this.localState } );
            }
        }

        this.activeMenuItem.classList.remove( 'hovering' );
        this.activeMenuItem.classList.add( 'active' );

        setTimeout( () => {
            iconContainer.style.overflow = 'hidden';
            this.activeMenuItem.classList.remove( 'clicked' );
            // if ( this.activeHover ) this.mouseleave( this.activeHover );
        }, 500 );
    }
}
