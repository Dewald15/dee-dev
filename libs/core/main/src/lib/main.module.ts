import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from '@dee-dev/core/router';
import {
    UiModule,
    BrandConfig,
    WWW_ENVIRONMENT_TOKEN,
    WWW_IMAGES_CONFIG_TOKEN,
    WWW_BRAND_CONFIG_TOKEN
} from '@dee-dev/components/ui';

import { MainComponent } from './main.component';

const WwwChangeManagerRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        loadChildren: '@dee-dev/components/ui#UiModule',
        data: { pageTitle: 'cxfi' }
    }
];

@NgModule( {
    imports: [BrowserModule, BrowserAnimationsModule, EffectsModule.forRoot( [] ), RouterModule.forRoot( WwwChangeManagerRoutes ), UiModule],
    declarations: [MainComponent],
    exports: [MainComponent]
} )
export class MainModule {
    static forRoot ( brand: BrandConfig, environment: { production: boolean; appRoot: string } ): ModuleWithProviders {
        return {
            ngModule: MainModule,
            providers: [
                {
                    provide: WWW_ENVIRONMENT_TOKEN,
                    useValue: environment.production ? environment.appRoot : environment.appRoot
                },
                { provide: WWW_IMAGES_CONFIG_TOKEN, useValue: brand.images },
                { provide: WWW_BRAND_CONFIG_TOKEN, useValue: brand }
            ]
        };
    }
}
