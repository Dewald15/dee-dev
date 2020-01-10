import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatDialogModule,
    MatStepperModule,
    MatTooltipModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@dee-dev/core/router';

import { wwwUiReducer, wwwUiInitialState, WwwUiEffects } from './+state';
import {
    ShellComponent,
    LandingComponent,
    ListItemsComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CodeComponent,
    ContactComponent,
    VideoOverlayComponent
} from './containers';
import { Routes } from '@angular/router';

export const shellRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ShellComponent
    }
];

@NgModule( {
    imports: [
        // ANGULAR
        CommonModule,
        FlexLayoutModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDialogModule,
        MatStepperModule,
        MatTooltipModule,
        // NGRX
        StoreModule.forFeature( 'www-ui', wwwUiReducer, { initialState: wwwUiInitialState } ),
        EffectsModule.forFeature( [WwwUiEffects] ),
        // SPAWNTECH CORE
        RouterModule.forChild( shellRoutes )
    ],
    declarations: [
        ShellComponent,
        LandingComponent,
        ListItemsComponent,
        HomeComponent,
        AboutComponent,
        SkillsComponent,
        CodeComponent,
        ContactComponent,
        VideoOverlayComponent
    ],
    entryComponents: [ShellComponent],
    exports: [
        // ANGULAR
        FlexLayoutModule,
        MatIconModule,
        MatSnackBarModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatCardModule,
        MatInputModule,
        MatCheckboxModule,
        MatTabsModule,
        MatDialogModule,
        MatStepperModule,
        MatTooltipModule,
        // SPAWNTECH WWW
        ShellComponent
    ]
} )
export class UiModule { }
