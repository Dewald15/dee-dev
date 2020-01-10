import { Component, OnChanges, OnInit, AfterViewInit, Inject, Output, EventEmitter, HostListener } from '@angular/core';

import { WWW_BRAND_CONFIG_TOKEN, WWW_IMAGES_CONFIG_TOKEN } from '../../tokens';
import { BrandConfig, ImagesConfig, StateConfig } from '../../models';
import { Observable, of } from 'rxjs';

window.addEventListener( "orientationchange", function () {
    let orientation = screen.orientation.angle;
    let sectionShell = document.querySelector( '.section-shell' );
    if ( orientation === 90 ) {
        // landscape
        sectionShell.classList.remove( 'portrait' );
        sectionShell.classList.add( 'landscape' );
    } else if ( orientation === 0 ) {
        // portrait
        sectionShell.classList.remove( 'landscape' )
        sectionShell.classList.add( 'portrait' )
    }
} );

@Component( {
    selector: 'blueCircle-ui-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
} )

export class LandingComponent implements OnInit, OnChanges, AfterViewInit {
    logo: string;
    x;
    toolbarElement;
    page;
    landingState: Observable<StateConfig>;
    sectionShell;

    // @HostListener( 'click', ['$event.target'] )
    // landingClicked ( target ) {
    //     this.landingListItemState.subscribe( object => this.localBlueCircleCurrentState = object );
    //     this.sectionLanding = document.querySelector( '.section-landing' );
    //     this.blueCircleInner = document.querySelector( '.blueCircle-inner' );

    //     if ( target && this.sectionLanding && this.blueCircleInner && this.sectionLanding !== undefined && this.blueCircleInner !== undefined ) {
    //         if ( target.classList.contains( 'blueCircleState' ) ) {
    //             if ( this.localBlueCircleCurrentState.state === 'none' ) {
    //                 this.sectionLanding.classList.remove( 'clicked' );
    //                 this.blueCircleInner.classList.remove( 'clicked' );

    //             } else if ( this.localBlueCircleCurrentState.state === 'one' ) {
    //                 this.sectionLanding.classList.add( 'clicked' );
    //                 this.blueCircleInner.classList.add( 'clicked' );
    //             }
    //         }
    //     }
    // }

    constructor ( @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.logo = brand.image.logo;
    }

    ngOnInit () {
    }

    ngOnChanges () {
        this.screenOrientationChange();
    }

    ngAfterViewInit () {
        this.toolbarElement = document.querySelector( '.toolbar' );
        this.changeState( { ...this.landingState, menu: { activeMenu: 0, lastMenuClicked: 0 } } );
        this.screenOrientationChange();
    }

    screenOrientationChange () {
        let orientation = screen.orientation.angle;
        this.sectionShell = document.querySelector( '.section-shell' );
        if ( orientation === 90 ) {
            // landscape
            this.sectionShell.classList.remove( 'portrait' );
            this.sectionShell.classList.add( 'landscape' );
        } else if ( orientation === 0 ) {
            // portrait
            this.sectionShell.classList.remove( 'landscape' )
            this.sectionShell.classList.add( 'portrait' )
        }
    }

    showCoords ( event ) {
        if ( this.toolbarElement ) {
            this.x = event.clientX / window.innerWidth * 100;
            this.x >= 80
                ? ( this.toolbarElement.classList.remove( 'small' ),
                    this.toolbarElement.classList.add( 'large' ) )
                : ( this.toolbarElement.classList.remove( 'large' ),
                    this.toolbarElement.classList.add( 'small' ) );
        }
    }

    changeState ( event ) {
        let currentActive = document.querySelector( '.section-shell' );
        this.landingState = of( event );
        if ( currentActive ) this.removeClasses();
        if ( event && event.menu ) {
            switch ( event.menu.activeMenu ) {
                case 0: currentActive.classList.add( 'home-page-active' );
                    break;
                case 1: currentActive.classList.add( 'about-page-active' );
                    break;
                case 2: currentActive.classList.add( 'skills-page-active' );
                    break;
                case 3: currentActive.classList.add( 'code-page-active' );
                    break;
                case 4: currentActive.classList.add( 'contact-page-active' );
                    break;
            }
        }
    }

    removeClasses () {
        let currentActive = document.querySelector( '.section-shell' );
        currentActive.classList.remove( 'home-page-active' );
        currentActive.classList.remove( 'about-page-active' );
        currentActive.classList.remove( 'skills-page-active' );
        currentActive.classList.remove( 'code-page-active' );
        currentActive.classList.remove( 'contact-page-active' );
    }

    scrolling () {
    }

}