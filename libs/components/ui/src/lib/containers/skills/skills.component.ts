import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';

@Component( {
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
} )
export class
    SkillsComponent implements OnInit, OnChanges, AfterViewInit {
    skillsImage;
    localState;
    skillsContainer;

    @Input()
    landingState: StateConfig;
    @Output()
    state: EventEmitter<void> = new EventEmitter();

    // @Input()
    // landingdee-devState: dee-devState;
    // listItemInfoListItemDetailState: EventEmitter<ListItemDetailState> = new EventEmitter();
    // @Output()
    // scrolling: EventEmitter<void> = new EventEmitter();

    constructor ( @Inject( WWW_IMAGES_CONFIG_TOKEN ) public images: ImagesConfig, @Inject( WWW_BRAND_CONFIG_TOKEN ) public brand: BrandConfig ) {
        this.skillsImage = images.icons.skills;
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
        this.skillsContainer = document.querySelector( ".main-container-skills" );

        if ( this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 2 ) {
            if ( this.skillsContainer ) this.skillsContainer.classList.add( 'skills-page' );
        } else {
            if ( this.skillsContainer ) this.skillsContainer.classList.remove( 'skills-page' );
        }
        this.localState = this.landingState;
    }

    ngAfterViewInit () {
    }
}