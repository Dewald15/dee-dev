import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';
import { Store } from '@ngrx/store';
import { store as routerStore } from '@dee-dev/core/router';

@Component( {
    selector: 'code-lab',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.css']
} )
export class
    CodeComponent implements OnInit, OnChanges, AfterViewInit {
    codeImage;
    localState;
    codeContainer;
    resume;
    showcaseContainerOne;
    showcaseContainerTwo;
    pdfImage;
    cxfiOldImage;
    papillImage;
    deeDevImage;

    @Input()
    landingState: StateConfig;
    @Output()
    state: EventEmitter<void> = new EventEmitter();

    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();

    constructor ( private _store: Store<any>, @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.codeImage = images.icons.showcase;
        this.pdfImage = images.icons.pdf;
        this.cxfiOldImage = images.showcase.cxfiOld;
        this.papillImage = images.showcase.papill;
        this.deeDevImage = images.showcase.deeDev;
        if ( this.landingState ) this.localState = this.landingState;
    }

    ngOnInit () {
        // window.addEventListener( 'scroll', this.scroll, true );
    }

    ngOnDestroy () {
        // window.removeEventListener( 'scroll', this.scroll, true );
    }

    ngOnChanges () {
        this.localState = this.landingState;
        this.state.emit( { ...this.localState } );
        this.codeContainer = document.querySelector( ".main-container-code" );
        this.showcaseContainerOne = document.querySelector( '.showcase-container-one' );
        this.showcaseContainerTwo = document.querySelector( '.showcase-container-two' );

        if ( this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 3 ) {
            if ( this.codeContainer ) this.codeContainer.classList.add( 'code-page' );
            if ( this.showcaseContainerOne ) this.showcaseContainerOne.classList.add( 'active' );
            if ( this.showcaseContainerTwo ) this.showcaseContainerTwo.classList.add( 'active' );
        } else {
            if ( this.codeContainer ) this.codeContainer.classList.remove( 'code-page' );
            if ( this.showcaseContainerOne ) this.showcaseContainerOne.classList.remove( 'active' );
            if ( this.showcaseContainerTwo ) this.showcaseContainerTwo.classList.remove( 'active' );
        }
        this.localState = this.landingState;
    }

    ngAfterViewInit () {
        this.resume = document.querySelector( '.resume-p' );
        this.showcaseContainerOne = document.querySelector( '.showcase-container-one' );
        this.showcaseContainerTwo = document.querySelector( '.showcase-container-two' );
    }

    onNavigate ( className: string, path: string ) {
        const buttonElement = document.querySelector( className );
        buttonElement.classList.add( 'clicked' );

        setTimeout( () => {
            buttonElement.classList.remove( 'clicked' );
        }, 400 );

        setTimeout( () => {
            path === 'resume-p'
                ? this._store.dispatch( new routerStore.OpenUrl( `https://drive.google.com/open?id=1xqgH1AeK1g9sFunbOq0bX8aU4uaZ2oYp` ) )
                : path === 'showcase-one'
                    ? this._store.dispatch( new routerStore.OpenUrl( `https://cxfi-old.firebaseapp.com` ) )
                    : path === 'showcase-two'
                        ? this._store.dispatch( new routerStore.OpenUrl( `https://papill.firebaseapp.com` ) )
                        : path === 'showcase-three'
                        ? this._store.dispatch( new routerStore.OpenUrl( `https://github.com/Dewald15/dee-dev` ) )
                        : path === 'demo'
                            ? console.log( 'demo action required' )
                            : console.log( 'error in list-items-detail.component.ts: onNavigate()' );
        }, 500 );
    }
}