import { Component, ChangeDetectionStrategy, HostListener, OnInit, OnChanges, AfterViewInit, Inject } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { store as routerStore } from '@dee-dev/core/router';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig } from '../../models';

type State = any;

@Component( {
    selector: 'dee-dev-ui-shell',
    templateUrl: './shell.component.html',
    styleUrls: ['shell.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ShellComponent implements OnInit, OnChanges, AfterViewInit {
    route$: Observable<string>;
    logo: string;

    public currentDotPos = 0;
    public timer: number;
    public mouseover: boolean;

    @HostListener( 'window:resize', ['$event'] )
    onRresize () {
        this.onDeviceScreenSizeChange();
        this.onScroll();
        this.setClientHeight();
    }

    @HostListener( 'window:scroll', ['$event'] )
    handleScroll () {
        this.onScroll();
    }

    @HostListener( 'window:orientationchange', ['$event'] )
    handleOrientationChange () {
        location.reload();
    }

    constructor ( private _store: Store<State>, @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.route$ = this._store.select( routerStore.segments ).pipe(
            filter( segments => !!segments ),
            map( segments => segments[0] )
        );
        this.logo = brand.image.logo;
    }

    ngOnInit () {
        this.onDeviceScreenSizeChange();
    }

    ngOnChanges () { }

    ngAfterViewInit () {
        this.setClientHeight();
        this.onDeviceScreenSizeChange();
        // this.setKeypressListener();
    }

    // setKeypressListener () {
    //     document.addEventListener( "keydown",  event  => {
    //         let handled = false;

    //         if ( event.defaultPrevented ) {
    //             return; // Should do nothing if the default action has been cancelled
    //         }

    //         if ( event.key && event.which ) {
    //             handled = true;
    //             switch ( event.key ) {
    //                 case '38':
    //                     return;
    //                 case '40':
    //                     return;
    //             }
    //         }

    //         if ( handled ) {
    //             // Suppress "double action" if event handled
    //             event.preventDefault();
    //         }
    //     }, true );
    // }

    onScroll () {
        const bodyRect = document.body.getBoundingClientRect();
        const containerLanding = document.querySelector( '.container-landing' );
        const landingCenterPosition = ( ( containerLanding.getBoundingClientRect().bottom - bodyRect.top ) / 2 );
        const listItemContainerOne = document.querySelector( '.list-item-container-one' );
        // const listItemContainerOneTop = listItemContainerOne.getBoundingClientRect().top;
        // const listItemContainerOneBottom = listItemContainerOne.getBoundingClientRect().bottom;
        const scaleCoordsOneTop = ( landingCenterPosition - ( 4 * 16 ) );
        const scaleCoordsOneBottom = ( landingCenterPosition + ( 4 * 16 ) );
        const scaleCoordsTwoTop = ( landingCenterPosition - ( 3 * 16 ) );
        const scaleCoordsTwoBottom = ( landingCenterPosition + ( 3 * 16 ) );
        const scaleCoordsThreeTop = ( landingCenterPosition - ( 2 * 16 ) );
        const scaleCoordsThreeBottom = ( landingCenterPosition + ( 2 * 16 ) );

        // if ( listItemContainerOneTop > scaleCoordsOneTop && listItemContainerOneBottom < scaleCoordsOneBottom) {
        //     listItemContainerOne.classList.remove( 'scale-2' );
        //     listItemContainerOne.classList.remove( 'scale-3' );
        //     listItemContainerOne.classList.add( 'scale-1' );
        // } if  ( listItemContainerOneTop > scaleCoordsTwoTop && listItemContainerOneBottom < scaleCoordsTwoBottom) {
        //     listItemContainerOne.classList.remove( 'scale-1' );
        //     listItemContainerOne.classList.add( 'scale-2' );
        // } if ( listItemContainerOneTop > scaleCoordsThreeTop && listItemContainerOneBottom < scaleCoordsThreeBottom ) {
        //     listItemContainerOne.classList.remove( 'scale-2' );
        //     listItemContainerOne.classList.add( 'scale-3' );
        // }
    }

    setClientHeight () {
        const body = document.querySelector( 'body' );
        const sectionLanding = document.querySelector( '.section-landing' );
        const sectionVideoModal = document.querySelector( '.video-modal' );
        const clientWidth = ( window.innerWidth / 100 ) + 'px';
        const clientHeightpx = window.innerHeight + 'px';

        if ( body ) {
            body.setAttribute( 'style', `
                --variableX: ${clientWidth };
            `)
        }
        if ( sectionLanding ) {
            sectionLanding['style']['height'] = clientHeightpx;
        }
        if ( sectionVideoModal ) {
            sectionVideoModal['style']['height'] = clientHeightpx;
        }
    }

    onNavigate ( path ) {
        this._store.select( routerStore.url( path ) );
    }

    onDeviceScreenSizeChange () {
        const deviceScreenWidth = window.innerWidth;
        const deviceScreenHeight = window.innerHeight;

        this.setGlobalProperties( devicePixelRatio, deviceScreenWidth, deviceScreenHeight );
    }

    scrollToTarget ( target ) {
        const srollToTarget = document.querySelector( target );

        srollToTarget.scrollIntoView( {
            behavior: 'smooth'
        } );
    }

    setGlobalProperties ( devicePixelRatio, deviceScreenWidth, deviceScreenHeight ) {
        const bodyNode = document.querySelector( 'body' );
        const containerGlobal = document.querySelector( '.container-global' );
        const listItems = document.querySelector( '.list-item' );

        bodyNode.style.width = deviceScreenWidth + 'px';
        bodyNode.style.height = deviceScreenHeight + 'px';
        containerGlobal['style'].width = deviceScreenWidth + 'px';
        containerGlobal['style'].height = deviceScreenHeight + 'px';
        listItems['style'].height = deviceScreenHeight + 'px';
        bodyNode.style.margin = 0 + 'px';
        bodyNode.style['--devicePixelRatio'] = devicePixelRatio;
    }
}
