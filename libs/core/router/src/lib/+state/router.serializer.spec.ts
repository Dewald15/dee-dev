import { TestBed, inject } from '@angular/core/testing';

import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { mockRouter } from '../config/router.mock';

import { CustomRouterStateSerializer } from './router.serializer';

describe('Router State Serializer', () => {
    let customSerializerResult;
    let expected;
    const activatedRouteSnapshot = new ActivatedRouteSnapshot();
    const mockSnapshot = jasmine.createSpyObj('RouterStateSnapshot', ['toString']);

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    { path: 'route1', component: mockRouter.DummyComponent },
                    { path: 'route2', component: mockRouter.DummyComponent }
                ])
            ],
            declarations: [mockRouter.DummyComponent, mockRouter.RoutingComponent],
            providers: [CustomRouterStateSerializer, { provide: RouterStateSnapshot, useValue: mockSnapshot }]
        });
    });

    describe('Overview', () => {
        xit(`Splits the routerState url into segments, gets the current query parameters, state data, or state parameters.`);
    });

    describe('CustomRouterStateSerializer', () => {
        it('gets the expected router state data', inject([CustomRouterStateSerializer], (customSerializer: CustomRouterStateSerializer) => {
            mockSnapshot.url = 'route1/route2';
            mockSnapshot.root = mockSnapshot;
            mockSnapshot.root.queryParams = { queryParams: 'queryParamsValue' };
            expected = {
                url: 'route1/route2',
                segments: ['route2'],
                data: undefined,
                queryParams: { queryParams: 'queryParamsValue' },
                params: undefined
            };
            customSerializerResult = customSerializer.serialize(mockSnapshot);
            expect(customSerializerResult).toEqual(expected);
        }));
    });
});
