import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';

@Component( {
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
} )
export class
    ContactComponent implements OnInit, OnChanges, AfterViewInit {
    contactImage;
    localState;
    contactContainer;
    input;
    container;
    classSuccess = "success";
    classError = "error";
    contactForm;
    formHeader;
    formBody;
    inputContainer;
    fields;
    submitBtn;
    timer;
    self;
    clicked = false;

    @Input()
    landingState: StateConfig;
    @Output()
    state: EventEmitter<void> = new EventEmitter();

    // @Input()
    // landingBlueCircleState: BlueCircleState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();

    constructor ( @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.contactImage = images.icons.contact;
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
        this.contactContainer = document.querySelector( ".main-container-contact" );

        if ( this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 4 ) {
            if ( this.contactContainer ) this.contactContainer.classList.add( 'contact-page' );
        } else {
            if ( this.contactContainer ) this.contactContainer.classList.remove( 'contact-page' );
        }
        this.localState = this.landingState;
        this.setTitleContainerHeight();
    }

    setTitleContainerHeight () {
        const contentContainer = document.querySelector( '.contact-content-container' );
        const bioTitle = document.querySelector( '.contact-form-title-main' );
        bioTitle['style'].height = contentContainer['offsetHeight'] + 'px';
    }

    ngAfterViewInit () {
        this.init();
    }

    init () {
        this.cacheDom();
        this.bindEvents();
    }

    cacheDom () {
        //MAIN PARENT ELEMENT
        this.contactForm = document.getElementById( "contactForm" );
        //MAIN FORM ELEMENTS
        this.formHeader = document.querySelector( "#formHeader h1" );
        this.formBody = document.getElementById( "formBody" );
        this.inputContainer = document.getElementsByClassName( "inputContainer" );
        //USER INPUT ELEMENTS
        //INPUT FIELDS
        this.fields = {
            userName: document.getElementById( "userName" ),
            userEmail: document.getElementById( "userEmail" ),
            userMessage: document.getElementById( "userMessage" )
        };
        this.submitBtn = document.getElementById( "submitBtn" );
    }

    bindEvents () {
        var i;
        //RUN RULES ON SUBMIT BUTTON CLICK
        this.submitBtn.onclick = this.runRules.bind( this );
        //BIND EVENTS TO EACH INPUT FIELD
        for ( i in this.fields ) {
            if ( this.fields.hasOwnProperty( i ) ) {
                //VARIABLES
                this.input = this.fields[i];
                this.container = this.input.parentElement;
                //RUN RULES WHEN INPUT HAS FOCUS
                this.input.onfocus = this.runRules.bind( this );
                //RESET ERRORS WHEN CONTAINER IS CLICKED
                this.container.onclick = this.resetErrors.bind( this, this.input );
            }
        }
    }

    runRules ( evnt ) {
        let target = evnt.target;
        let type = evnt.type;
        //IF EVENT ON SUBMIT BUTTON
        if ( type === "focus" ) {
            //RESET CLASSLIST
            this.resetClassList( target.parentElement );
            //RESET ERRORS
            this.resetErrors( target );
            return false;
        }
        //RESET CLASSLIST
        this.resetClassList( null );
        //CHECK FIELDS
        this.checkFields( evnt );
    }

    preventDefault ( evnt ) {
        //PREVENT DEFUALT
        evnt.preventDefault();
    }

    checkFields ( event ) {
        let i;
        let validCount = 0,
            //EMAIL FILTER
            filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //CYLCE THROUGH INPUTS
        for ( i in this.fields ) {
            if ( this.fields.hasOwnProperty( i ) ) {
                this.input = this.fields[i];
                //CHECK IF FIELD IS EMPTY
                if ( this.input.value === "" ) {
                    //ADD ERROR CLASS
                    this.addClass( this.input, this.classError );
                    //CHECK IF EMAIL IS VALID
                } else if ( i === "userEmail" && !filter.test( this.input.value ) ) {
                    //ADD ERROR CLASS
                    this.addClass( this.input, this.classError );
                } else {
                    //FIELD IS VALID
                    this.addClass( this.input, this.classSuccess );
                    validCount += 1;
                }
            }
        }
        //IF ALL FEILDS ARE VALID
        if ( validCount === 3 ) {
            //SUBMIT FORM
            this.submitForm();
        } else {
            this.preventDefault( event );
        }
    }

    addClass ( input, clss ) {
        this.container = input.parentElement;
        //IF INPUT HAS ERROR
        if ( clss === this.classError ) {
            //SHOW ERROR MESSAGE
            this.errorMessage( input );
        }
        //ADD CLASS
        input.parentElement.classList.add( clss );
    }

    errorMessage ( input ) {
        var message;
        //IF USERNAME HAS ERROR
        if ( input === this.fields.userName ) {
            message = "Please enter your name";
            //ELSE IF USEREMAIL HAS ERROR
        } else if ( input === this.fields.userEmail ) {
            message = "Please enter a valid email";
            //ELSE IF USERMESSAGE HAS ERROR
        } else if ( input === this.fields.userMessage ) {
            message = "Please enter your feedback";
        }
        this.renderError( input, message );
    }

    renderError ( input, message ) {
        var html;
        //GET INPUT CONTAINER
        this.container = input.parentElement;
        //RENDER HTML
        html = document.createElement( "div" );
        html.setAttribute( "class", "message" );
        html.innerHTML = message;
        //IF MESSAGE ELEMENT DOESN'T EXIST
        if ( !this.container.getElementsByClassName( "message" )[0] ) {
            //INSERT MESSAGE TO INPUT CONTAINER
            this.container.insertBefore( html, this.container.firstElementChild );
            html.setAttribute( 'style', `
                color      : #FF5C5C;
                background : #ffb8b8;
                position   : absolute;
                top        : 0;
                bottom     : 0;
                width      : 0;
                margin     : 0;
                line-height: 2.5em;
                text-align : center;
                overflow   : hidden;
                transition: all 0.1s ease;
            `);
        }
    }

    resetClassList ( input ) {
        var i;
        //IF TARGETING SPECIFIC INPUT
        if ( input ) {
            //GET INPUT CONTAINER
            this.container = input.parentElement;
            //REMOVE CLASSES
            this.container.classList.remove( this.classError, this.classSuccess );
            //FOCUS ON INPUT FIELD
            input.focus();
        } else {
            for ( i in this.fields ) {
                if ( this.fields.hasOwnProperty( i ) ) {
                    //REMOVE CLASSES FROM ALL FIELDS
                    this.fields[i].parentElement.classList.remove( this.classError, this.classSuccess );
                }
            }
        }
    }

    resetErrors ( input ) {
        //GET INPUT CONTAINER
        this.container = input.parentElement;
        //IF CONTAINER CONTAINS ERROR
        if ( this.container.classList.contains( this.classError ) ) {
            //RESET CLASSES
            this.resetClassList( input );
        }
    }

    submitForm () {
        const btnIcon = document.querySelector( '.wrap img' );
        const svg = document.querySelector( '.circle-svg' );
        const circleTwo = document.querySelector( '.circle_2' );

        this.submitBtn.classList.add( "circle" );
        this.submitBtn.setAttribute( "style", "color: var(--green);" );
        this.submitBtn.setAttribute( "value", "" );
        svg.setAttribute( "style", "display: block;" );
        circleTwo.classList.add( "fill_circle" );

        setTimeout( () => {
            svg.setAttribute( "style", "display: none;" );
            this.submitBtn.classList.remove( "circle" );
            this.submitBtn.classList.add( "circleTwo" );
            this.submitBtn.setAttribute( "value", "Done!" );
            // self.html("b");
            btnIcon.setAttribute( "style", "display: block;" );
        }, 2500 );

        setTimeout( () => {
            for ( let i = 0; i < this.inputContainer.length; i++ ) {
                this.inputContainer[i].classList.remove( 'success' );
                this.inputContainer[i].classList.remove( 'error' );
            };
            this.submitBtn.setAttribute( "style", "color: white" );
            this.submitBtn.classList.remove( "circleTwo" );
            this.submitBtn.setAttribute( "value", "Send" );
        }, 5000 );
    }
};