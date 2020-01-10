import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { RouterModule as NgRouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { RouterEffects, CustomRouterStateSerializer } from './+state';

/**
 * Sets up Angular router forRoot and enables appRoutes.
 * Also adds StoreRouterConnectingModule to deliver NGRX router state.
 *
 * This module should be imported to AppModule as forRoot in place of Angular's RouterModule.
 * Required for:
 * - ModelsModule
 * - UiModule
 * - AuthModule (lazy feature)
 *
 */

@NgModule({
    imports: [
        // NGRX
        StoreModule.forFeature('router', routerReducer),
        EffectsModule.forFeature([RouterEffects])
    ],
    exports: [NgRouterModule]
})
export class RouterModule {
    static forRoot(appRoutes: Routes): ModuleWithProviders[] {
        return [
            // ANGULAR
            NgRouterModule.forRoot(appRoutes, { initialNavigation: 'enabled' }), // NGRX
            StoreRouterConnectingModule.forRoot(), // SELF // { navigationActionTiming: NavigationActionTiming.PostActivation }
            { ngModule: RouterModule, providers: [{ provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }] }
        ];
    }

    static forChild(routes: Routes): ModuleWithProviders[] {
        return [
            // ANGULAR
            NgRouterModule.forChild(routes)
        ];
    }
}
