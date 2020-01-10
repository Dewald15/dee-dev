import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateData } from './router.reducer';

export const state = createFeatureSelector<RouterReducerState<RouterStateData>>('router');

export const url = createSelector(
    state,
    router => router.state && router.state.url
);
export const segments = createSelector(
    state,
    router => router && router.state && router.state.segments
);
export const params = createSelector(
    state,
    router => router && router.state && router.state.params
);
export const queryParams = createSelector(
    state,
    router => router && router.state && router.state.queryParams
);
export const data = createSelector(
    state,
    router => router && router.state && router.state.data
);
export const pageTitle = createSelector(
    data,
    (routerData: any) => routerData.pageTitle
);
