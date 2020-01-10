import { Component } from '@angular/core';

import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateData } from '../+state/router.reducer';

const mockRouterStateData: RouterStateData = {
    url: 'route1',
    data: {
        pageTitle: 'pageTitle'
    },
    queryParams: { queryParams: 'queryParamsValue' },
    params: { id: '1' },
    segments: ['route1', 'route2']
};

const mockRouterReducerState: RouterReducerState<any> = {
    state: mockRouterStateData,
    navigationId: 1
};

// dummy components
@Component({
    template: '<router-outlet></router-outlet>'
})
class RoutingComponent {}

@Component({
    template: ''
})
class DummyComponent {}

export const mockRouter = {
    mockRouterStateData,
    mockRouterReducerState,
    RoutingComponent,
    DummyComponent
};
