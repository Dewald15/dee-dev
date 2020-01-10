import { createFeatureSelector, createSelector } from '@ngrx/store';

import { store as routerStore } from '@dee-dev/core/router';

import { WwwUiData } from './ui.reducer';

export const uiState = createFeatureSelector<WwwUiData>( 'www-ui' );
export const showToolbar = createSelector(
    routerStore.segments,
    segments => segments
);
export const showSpinner = createSelector(
    uiState,
    state => state.showspinner
);
