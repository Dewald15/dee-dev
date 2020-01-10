import { TestBed } from '@angular/core/testing';

import { StoreModule, Store } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { store as routerStore, RouterStateData } from '@dee-dev/core/router';

import { url, segments, params, queryParams, data, pageTitle } from './router.selectors';

describe('Router Selectors', () => {
    let store: Store<RouterReducerState<RouterStateData>>;
    let result;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot({}),
                StoreModule.forFeature('router', routerReducer, {
                    initialState: routerStore.mockRouter.mockRouterReducerState
                })
            ]
        });
    });

    beforeEach(() => {
        store = TestBed.get(Store);
    });

    describe('Overview', () => {
        xit(`Selects specific data from the router state.`);
    });

    describe('url', () => {
        it('gets the url', () => {
            store.select(url).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.url);
        });
    });

    describe('segments', () => {
        it('gets the url segments', () => {
            store.select(segments).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.segments);
        });
    });

    describe('params', () => {
        it('gets the parameters', () => {
            store.select(params).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.params);
        });
    });

    describe('queryParams', () => {
        it('gets the query parameters', () => {
            store.select(queryParams).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.queryParams);
        });
    });

    describe('data', () => {
        it('gets the data', () => {
            store.select(data).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.data);
        });
    });

    describe('pageTitle', () => {
        it('gets the page title', () => {
            store.select(pageTitle).subscribe(value => (result = value));
            expect(result).toEqual(routerStore.mockRouter.mockRouterStateData.data.pageTitle);
        });
    });
});
