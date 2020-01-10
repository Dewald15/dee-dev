// import { TestBed } from '@angular/core/testing';

// import { Store, StoreModule } from '@ngrx/store';
// import { routerReducer } from '@ngrx/router-store';

// import { mockUser, mockAccount, CoreCollections } from '@dee-dev/core/types';

// import { store as modelsStore } from '@dee-dev/core/models';

// import { store as routerStore } from '@dee-dev/core/router';

// import { UiData, uiReducer, uiInitialState } from './ui.reducer';
// import { showToolbar, showSpinner } from './ui.selectors';

// describe('Ui Selectors', () => {
//     let storeUI: Store<UiData>;
//     let result;
//     const account = { '1': mockAccount };

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 StoreModule.forRoot({}),
//                 StoreModule.forFeature('ui', uiReducer, {
//                     initialState: {
//                         ...uiInitialState
//                     }
//                 }),
//                 StoreModule.forFeature('sessionUser', modelsStore.mocks.sessionUser.reducer, {
//                     initialState: { ...modelsStore.mocks.sessionUser.initialState, id: '1', data: mockUser }
//                 }),
//                 StoreModule.forFeature(CoreCollections.Accounts, modelsStore.mocks.accounts.reducer, {
//                     initialState: { ...modelsStore.mocks.accounts.initialState, ...account }
//                 }),
//                 StoreModule.forFeature('router', routerReducer, {
//                     initialState: routerStore.mockRouter.mockRouterReducerState
//                 })
//             ]
//         });
//     });

//     beforeEach(() => {
//         storeUI = TestBed.get(Store);
//     });

//     describe('Overview', () => {
//         xit(`Gets specific data from the ui state in order to proceed to either display the toolbar or the spinner.`);
//     });

//     describe('showToolbar', () => {
//         it('checks if the toolbar can be displayed', () => {
//             storeUI.select(showToolbar).subscribe(value => (result = value));
//             expect(result).toBeTruthy();
//         });
//     });

//     describe('showSpinner', () => {
//         it('checks if the spinner can be displayed', () => {
//             storeUI.select(showSpinner).subscribe(value => (result = value));
//             expect(result).toBeFalsy();
//         });
//     });
// });
