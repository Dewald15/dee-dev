import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';

window.addEventListener( "orientationchange", function () {
    let orientation = screen.orientation.angle;
    let homeContainer = document.querySelector( '.home-container' );
    if ( orientation === 90 ) {
        // landscape
        homeContainer.classList.remove( 'portrait' );
        homeContainer.classList.add( 'landscape' );
    } else if ( orientation === 0 ) {
        // portrait
        homeContainer.classList.remove( 'landscape' );
        homeContainer.classList.add( 'portrait' );
    }
} );

@Component( {
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
} )
export class
    HomeComponent implements OnInit, OnChanges, AfterViewInit {
    headShot;
    localState;
    homeContainer;
    words;
    wordArray = [];
    currentWord = 0;

    @Input()
    landingState: StateConfig;
    @Output()
    state: EventEmitter<void> = new EventEmitter();

    constructor ( @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.headShot = images.headShot;
        this.localState = { ...this.landingState };
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
        this.homeContainer = document.querySelector( ".home-container" );
        const intro = document.querySelector( '.intro' );
        const headshotImage = document.querySelector( '.headshot-image' );
        const rotatingText = document.querySelector( '.rotating-text' );

        if ( this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 0 ) {
            if ( this.homeContainer ) this.homeContainer.classList.add( 'home' );

            // setTimeout( () => {
            intro.classList.add( 'go' );
            headshotImage.classList.add( 'image-active' );
            rotatingText.classList.add( 'rotating-active' );
            // }, 1000 );
        } else {
            if ( this.landingState
            ) {
                if ( this.homeContainer ) this.homeContainer.classList.remove( 'home' );
                intro.classList.remove( 'go' );
                headshotImage.classList.remove( 'image-active' );
                rotatingText.classList.remove( 'rotating-active' );
            }
        }
        this.localState = this.landingState;
        this.screenOrientationChange();
    }

    ngAfterViewInit () {
        const headshotImage = document.querySelector( '.headshot-image' );
        const rotatingText = document.querySelector( '.rotating-text' );
        const intro = document.querySelector( '.intro' );
        setTimeout( () => {
            intro.classList.add( 'go' );
            headshotImage.classList.add( 'image-active' );
            rotatingText.classList.add( 'rotating-active' );
        }, 200 );

        // I am a ================================================

        var words = document.getElementsByClassName( 'word' );
        var wordArray = [];
        var currentWord = 0;

        words[currentWord]['style'].opacity = 1;
        for ( var i = 0; i < words.length; i++ ) {
            splitLetters( words[i] );
        }

        const letter = document.getElementsByClassName( 'letter' );
        for ( var i = 0; i < letter.length; i++ ) {
            letter[i]['style'].transformOrigin = '50% 50% 25px';
            letter[i]['style'].position = 'relative';
            letter[i]['style'].display = 'inline-block';
            letter[i]['style'].transform = 'translateZ(25px)';
        }

        function changeWord () {
            var cw = wordArray[currentWord];
            var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
            for ( var i = 0; i < cw.length; i++ ) {
                animateLetterOut( cw, i );
            }

            for ( var i = 0; i < nw.length; i++ ) {
                nw[i].className = 'letter behind';
                nw[0].parentElement.style.opacity = 1;
                nw[i].style.transform = 'rotateX(90deg)';
                animateLetterIn( nw, i );
            }

            currentWord = ( currentWord == wordArray.length - 1 ) ? 0 : currentWord + 1;
        }

        function animateLetterOut ( cw, i ) {
            setTimeout( function () {
                cw[i].className = 'letter out';
                cw[i].style.transform = 'rotateX(90deg)';
                cw[i].style.transition = 'all 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
            }, i * 80 );
        }

        function animateLetterIn ( nw, i ) {
            setTimeout( function () {
                nw[i].className = 'letter in';
                nw[i].style.transform = 'rotateX(0deg)';
                nw[i].style.transition = 'all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19)';
            }, 340 + ( i * 80 ) );
        }

        function splitLetters ( word ) {
            var content = word.innerHTML;
            word.innerHTML = '';
            var letters = [];
            for ( var i = 0; i < content.length; i++ ) {
                var letter = document.createElement( 'span' );
                letter.className = 'letter';
                letter.innerHTML = content.charAt( i );
                if ( letter.innerHTML === " " ) {
                    letter.innerHTML = '&nbsp';
                }
                word.appendChild( letter );
                letters.push( letter );
            }

            wordArray.push( letters );
        }

        changeWord();
        setInterval( changeWord, 4000 );

        this.screenOrientationChange();
    }

    screenOrientationChange () {
        let orientation = screen.orientation.angle;
        this.homeContainer = document.querySelector( '.home-container' );
        if ( orientation === 90 ) {
            // landscape
            this.homeContainer.classList.remove( 'portrait' );
            this.homeContainer.classList.add( 'landscape' );
        } else if ( orientation === 0 ) {
            // portrait
            this.homeContainer.classList.remove( 'landscape' );
            this.homeContainer.classList.add( 'portrait' );
        }
    }
}