import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { storeFreeze } from 'ngrx-store-freeze';

import { MainModule } from '@dee-dev/core/main';

import { AppComponent } from './app.component';
import { wwwEnvironment, brandConfig } from './config';

@NgModule( {
    imports: [
        StoreModule.forRoot( {}, { metaReducers: !wwwEnvironment.production ? [storeFreeze] : [] } ),
        !wwwEnvironment.production ? StoreDevtoolsModule.instrument( { name: 'dee-dev', maxAge: 250 } ) : [],
        MainModule.forRoot( brandConfig, wwwEnvironment )
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
} )
export class AppModule { }
