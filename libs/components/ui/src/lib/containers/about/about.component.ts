import { Component, OnChanges, OnInit, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';

import { WWW_IMAGES_CONFIG_TOKEN, WWW_BRAND_CONFIG_TOKEN } from '../../tokens';
import { ImagesConfig, BrandConfig, StateConfig } from '../../models';

@Component( {
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
} )
export class
    AboutComponent implements OnInit, OnChanges, AfterViewInit {
    aboutImage;
    localState;
    aboutContainer;
    localCount = 0;

    $svgLine;
    $svgLineShadow;
    sliderThumbSize;
    sliderHeight;
    svgViewBoxHeight;
    svgViewBoxThumbLimit;
    svgViewBoxGraphMax;
    svgViewBoxGraphMin;
    ranges;
    points;
    app;
    format;
    competenciesArray = [90, 78, 85, 90, 75, 78, 80];
    competenciesMapArray = [6,19,12,6,22,19,17];

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
        this.aboutImage = images.icons.about;
        if ( this.landingState ) this.localState = this.landingState;

        if ( !String.prototype['format'] ) {
            String.prototype['format'] = function () {
                var args = arguments;
                return this.replace( /{(\d+)}/g, function ( match, number ) {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                } );
            };
        }
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
        this.aboutContainer = document.querySelector( ".main-container" );

        if ( this.landingState && this.landingState.menu && this.landingState.menu.lastMenuClicked === 1 ) {
            if ( this.aboutContainer ) this.aboutContainer.classList.add( 'about-page' );
        } else {
            if ( this.aboutContainer ) this.aboutContainer.classList.remove( 'about-page' );
        }
        this.localState = this.landingState;
    }

    ngAfterViewInit () {
        this.$svgLine = document.querySelector( 'svg .line' );
        this.$svgLineShadow = document.querySelector( 'svg .line-shadow' );
        this.sliderThumbSize = 20;
        this.sliderHeight = 300;
        this.svgViewBoxHeight = 100;
        this.svgViewBoxThumbLimit = this.sliderThumbSize / 2 * ( this.svgViewBoxHeight / this.sliderHeight );
        this.svgViewBoxGraphMax = this.svgViewBoxHeight - this.svgViewBoxThumbLimit;
        this.svgViewBoxGraphMin = this.svgViewBoxThumbLimit;

        this.ranges = {
            range1: null,
            range2: null,
            range3: null,
            range4: null,
            range5: null,
            range6: null,
            range7: null
        };

        // Only the y values changes
        this.points = {
            begin: {
                x: 10,
                y: 0
            },

            point1: {
                x: 10,
                y: 0
            },

            control1: {
                x: 20,
                y: 10
            },

            control2: {
                x: 20,
                y: 0
            },

            point2: {
                x: 30,
                y: 0
            },

            control3: {
                x: 40,
                y: 0
            },

            point3: {
                x: 50,
                y: 0
            },

            control4: {
                x: 60,
                y: 0
            },

            point4: {
                x: 70,
                y: 0
            },

            control5: {
                x: 80,
                y: 0
            },

            point5: {
                x: 90,
                y: 0
            },

            control6: {
                x: 100,
                y: 0
            },

            point6: {
                x: 110,
                y: 0
            },

            control7: {
                x: 120,
                y: 0
            },

            point7: {
                x: 130,
                y: 0
            }
        };
        this.initAndSetupTheSliders();
        this.setTitleContainerHeight();
    }

    setTitleContainerHeight(){
        const eduEmpContainer = document.querySelector( '.edu-emp-container' );
        const eduAndEmpTitle = document.querySelector( '.edu-and-emp-title-main' );
        eduAndEmpTitle['style'].height = eduEmpContainer['offsetHeight'] + 'px';
        const contentContainer = document.querySelector( '.content-container' );
        const bioTitle = document.querySelector( '.bio-title-main' );
        bioTitle['style'].height = contentContainer['offsetHeight'] + 'px';
    }

    updateSlider ( $element ) {
        if ( $element ) {
            let rangeIndex = $element.getAttribute( 'data-slider-index' ),
                range = this.ranges[rangeIndex],
                value = $element.value;

            if ( range === value ) {
                return; // No value change, no need to update then
            }
            // Update state
            this.ranges[rangeIndex] = value;
            let pct;
            let parent = $element.parentElement;
            let $thumb = parent.querySelector( '.range-slider__thumb' );
                let $bar = parent.querySelector( '.range-slider__bar' );
                // pct = value * ( ( this.sliderHeight - this.sliderThumbSize ) / this.sliderHeight );
                switch(this.localCount){
                    case 0: pct = this.competenciesArray[0];
                    break;
                    case 1: pct = this.competenciesArray[1];
                    break;
                    case 2: pct = this.competenciesArray[2];
                    break;
                    case 3: pct = this.competenciesArray[3];
                    break;
                    case 4: pct = this.competenciesArray[4];
                    break;
                    case 5: pct = this.competenciesArray[5];
                    break;
                    case 6: pct = this.competenciesArray[6];
                    break;
                }
                if(this.localCount !== 6){
                    this.localCount++;
                } else {
                    this.localCount = 0;
                }

                // pct = value * ( ( this.sliderHeight - this.sliderThumbSize ) / this.sliderHeight );

            $thumb.style.bottom = `${ pct }%`;
            // $bar.style.height = `calc(${ pct }% + ${ this.sliderThumbSize / 2 }px)`;
            $bar.style.height = `calc(${ pct }%)`;
            //$thumb.textContent = `${value}%`;

            this.renderSliderGraph();
        }
    }

    updatePoints () {
        // Convert from percentage to coordinate values
        // Calculate and floor the values
        this.points.point1.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range1 / 100 | 0;
        this.points.point2.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range2 / 100 | 0;
        this.points.point3.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range3 / 100 | 0;
        this.points.point4.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range4 / 100 | 0;
        this.points.point5.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range5 / 100 | 0;
        this.points.point6.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range6 / 100 | 0;
        this.points.point7.y = this.svgViewBoxHeight - this.svgViewBoxHeight * this.ranges.range7 / 100 | 0;

        const max = this.svgViewBoxGraphMax;
        const min = this.svgViewBoxGraphMin;

        this.points.point1.y = this.mapDataRange( this.points.point1.y );
        this.points.point2.y = this.mapDataRange( this.points.point2.y );
        this.points.point3.y = this.mapDataRange( this.points.point3.y );
        this.points.point4.y = this.mapDataRange( this.points.point4.y );
        this.points.point5.y = this.mapDataRange( this.points.point5.y );
        this.points.point6.y = this.mapDataRange( this.points.point6.y );
        this.points.point7.y = this.mapDataRange( this.points.point7.y );

        // Update Y for the other this.points
        this.points.begin.y = this.points.point1.y;
        this.points.control1.y = this.points.point1.y;
        this.points.control2.y = this.points.point2.y;
        this.points.control3.y = this.points.point3.y;
        this.points.control4.y = this.points.point4.y;
        this.points.control5.y = this.points.point5.y;
        this.points.control6.y = this.points.point6.y;
        this.points.control7.y = this.points.point7.y;
    }

    mapDataRange ( value ) {
        // stackoverflow.com/a/929107/5707008
        // return (((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin)) + NewMin
        return ( value - 0 ) * ( this.svgViewBoxGraphMax - this.svgViewBoxGraphMin ) / ( this.svgViewBoxHeight - 0 ) + this.svgViewBoxGraphMin;
    }

    getInterpolatedLine ( type?) {

        let shadowOffset = 0;
        if ( type === 'shadow' ) {
            shadowOffset = 10; // simple simulation, no fancy shadow algorithm
        }

        return 'M {0},{1} L {2},{3} C {4},{5} {6},{7} {8},{9} S {10} {11}, {12} {13} S {14} {15}, {16} {17} S {18} {19}, {20} {21} S {22} {23}, {24} {25} S {26} {27}, {28} {29}'['format'](
            // M
            // this.points.begin.x, this.points.begin.y,
            this.points.begin.x, this.competenciesMapArray[0],
            // L
            // this.points.point1.x, this.points.point1.y,
            this.points.point1.x, this.competenciesMapArray[0],
            // C
            // this.points.control1.x, this.points.control1.y,
            this.points.control1.x, this.competenciesMapArray[0],
            // this.points.control2.x, this.points.control2.y + shadowOffset,
            // this.points.point2.x, this.points.point2.y + shadowOffset,
            this.points.control2.x, this.competenciesMapArray[1],
            this.points.point2.x, this.competenciesMapArray[1],
            // S
            this.points.control3.x, this.competenciesMapArray[2],
            this.points.point3.x, this.competenciesMapArray[2],
            // S
            // this.points.control4.x, this.points.control4.y + shadowOffset,
            // this.points.control4.x, this.points.control4.y + shadowOffset,
            this.points.point4.x,this.competenciesMapArray[3],
            this.points.point4.x,this.competenciesMapArray[3],
            // S
            // this.points.control5.x, this.points.control5.y,
            // this.points.point5.x, this.points.point5.y,
            this.points.control5.x, this.competenciesMapArray[4],
            this.points.point5.x, this.competenciesMapArray[4],
            // S
            // this.points.control6.x, this.points.control6.y + shadowOffset,
            // this.points.point6.x, this.points.point6.y + shadowOffset,
            this.points.control6.x, this.competenciesMapArray[5],
            this.points.point6.x, this.competenciesMapArray[5],
            // S
            // this.points.control7.x, this.points.control7.y,
            // this.points.point7.x, this.points.point7.y );
            this.points.control7.x, this.competenciesMapArray[6],
            this.points.point7.x, this.competenciesMapArray[6] );
    }

    formatString ( values ) {
        var args = values;
        return args.replace( /{(\d+)}/g, function ( match, number ) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        } );
    };

    reset () {
        const inputs = [].slice.call( document.querySelectorAll( '.sliders input' ) );
        inputs.forEach( input => input.value = 50 );
        inputs.forEach( input => this.updateSlider( input ) );
    }

    renderSliderGraph () {
        this.updatePoints();
        this.$svgLine.setAttribute( 'd', this.getInterpolatedLine() );
        this.$svgLineShadow.setAttribute( 'd', this.getInterpolatedLine( 'shadow' ) );
    }

    selectPreset ( type ) {
        // Generate random graph
        const inputs = [].slice.call( document.querySelectorAll( '.sliders input' ) );
        inputs.forEach( input => input.value = Math.random() * 100 | 0 );
        inputs.forEach( input => this.updateSlider( input ) );
    }

    initAndSetupTheSliders () {
        const inputs = [].slice.call( document.querySelectorAll( '.sliders input' ) );
        let index = 1;
        inputs.forEach( input => input.setAttribute( 'data-slider-index', 'range' + index++ ) );
        inputs.forEach( input => input.value = 50 );
        inputs.forEach( input => this.updateSlider( input ) );
        // Cross-browser support where value changes instantly as you drag the handle, therefore two event types.
        inputs.forEach( input => input.addEventListener( 'input', element => this.updateSlider( input ) ) );
        inputs.forEach( input => input.addEventListener( 'change', element => this.updateSlider( input ) ) );
        this.selectPreset( 'custom' );
    };
}