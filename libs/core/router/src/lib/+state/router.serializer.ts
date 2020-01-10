import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { RouterStateSerializer } from '@ngrx/router-store';

import { RouterStateData } from './router.reducer';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateData> {
    serialize(routerState: RouterStateSnapshot): RouterStateData {
        const { url } = routerState;
        const segments = url
            .split('/')
            .splice(1)
            .map(segment => segment.split('?')[0]);

        const { queryParams } = routerState.root;
        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }
        const { params, data } = state;

        return { url, segments, data, queryParams, params };
    }
}
