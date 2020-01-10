// import { TestBed } from '@angular/core/testing';

// import { MatSnackBar } from '@angular/material';

// import { StoreModule, Store } from '@ngrx/store';
// import { provideMockActions } from '@ngrx/effects/testing';

// import { hot, cold } from '@nrwl/nx/testing';

// import { of, Observable } from 'rxjs';

// import { mockUser, mockAccount, SnackbarTypes } from '@dee-dev/core/types';

// import { store as modelsStore, UserService, MockUserService } from '@dee-dev/core/models';

// import { BackendService, MockBackendService } from '@dee-dev/core/backend';

// import { store as routerStore } from '@dee-dev/core/router';

// import { UiEffects } from './ui.effects';
// import {
//     DisplaySnackbar,
//     SignOut,
//     Reset,
//     SendVerifyEmail,
//     SendAccountAccessEmail,
//     SendAccountAccessEmailSuccess,
//     SwitchAccounts,
//     SwitchAccountsSuccess
// } from './ui.actions';

// describe('Ui Effects', () => {
//     let store;
//     let actions$: Observable<any>;
//     let effects$: UiEffects;
//     let expected;
//     let snackbarComponentStub;
//     let dataOptsStub;
//     let mockBackendService: BackendService;
//     let mockUserService: UserService;
//     const user = { id: '1', data: mockUser };
//     const snackbar = { message: 'message' };
//     const account = { id: '1', data: mockAccount };
//     const switchAccountsPayloadStub = { userId: '1', account: { id: '1', data: mockAccount } };
//     const mockSwitchAccountsSuccessPayload = { id: '1', name: 'name' };

//     const openFromComponentFake = (param1, param2) => {
//         snackbarComponentStub = param1;
//         dataOptsStub = param2;
//     };

//     const openFromComponentStub = {
//         openFromComponent: jasmine.createSpy('openFromComponent').and.callFake(openFromComponentFake)
//     };

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 StoreModule.forRoot({}),
//                 StoreModule.forFeature('sessionUser', modelsStore.mocks.sessionUser.reducer, {
//                     initialState: { ...modelsStore.mocks.sessionUser.initialState, ...user }
//                 }),
//                 StoreModule.forFeature('sessionAccount', modelsStore.mocks.sessionAccount.reducer, {
//                     initialState: { ...modelsStore.mocks.sessionAccount.initialState, ...account }
//                 })
//             ],
//             providers: [
//                 UiEffects,
//                 provideMockActions(() => actions$),
//                 { provide: MatSnackBar, useValue: openFromComponentStub },
//                 { provide: BackendService, useClass: MockBackendService },
//                 { provide: UserService, useClass: MockUserService }
//             ]
//         });
//     });

//     beforeEach(() => {
//         effects$ = TestBed.get(UiEffects);
//         store = TestBed.get(Store);
//         mockBackendService = TestBed.get(BackendService);
//         mockUserService = TestBed.get(UserService);
//         spyOn(mockBackendService, 'signOut').and.returnValue(of(null));
//         spyOn(store, 'dispatch').and.returnValue(of(null));
//     });

//     describe('Overview', () => {
//         xit(`Displays the snackbar, and handles sign-out and email verification procedures.`);
//     });

//     describe('displaySnackbar', () => {
//         it('uses the openFromComponent method from MatSnackBar with the correct values', () => {
//             actions$ = hot('-a', { a: new DisplaySnackbar(snackbar) });
//             effects$.displaySnackbar$.subscribe(result => {
//                 expect(result).toEqual({
//                     message: snackbar.message,
//                     type: SnackbarTypes.Info,
//                     title: 'Take Note'
//                 });
//                 expect(openFromComponentStub.openFromComponent).toHaveBeenCalledWith(snackbarComponentStub, dataOptsStub);
//             });
//         });
//     });

//     describe('signOut', () => {
//         beforeEach(() => {
//             actions$ = hot('-a', { a: new SignOut() });
//             expected = cold('-a', { a: new routerStore.Go({ path: ['/auth'] }) });
//         });

//         it('uses the signOut method from BackendService', () => {
//             expect(effects$.signOut$).toBeObservable(expected);
//             expect(mockBackendService.signOut).toHaveBeenCalled();
//         });

//         it('calls Go on successful completion', () => {
//             expect(effects$.signOut$).toBeObservable(expected);
//             expect(store.dispatch).toHaveBeenCalledTimes(7);
//             expect(store.dispatch).toHaveBeenCalledWith(new Reset());
//         });
//     });

//     describe('sendVerifyEmail', () => {
//         it('uses the sendVerifyEmail method from BackendService', () => {
//             spyOn(mockBackendService, 'sendVerifyEmail').and.callThrough();
//             actions$ = hot('-a', { a: new SendVerifyEmail() });
//             effects$.sendVerifyEmail$.subscribe(() => {
//                 expect(mockBackendService.sendVerifyEmail).toHaveBeenCalled();
//             });
//         });
//     });

//     describe('sendAccountAccessEmail', () => {
//         beforeEach(() => {
//             actions$ = hot('-a', { a: new SendAccountAccessEmail() });
//             expected = cold('-a', { a: new SendAccountAccessEmailSuccess() });
//         });

//         it('uses the sendAccountAccessRequestEmail method from BackendService', () => {
//             spyOn(mockBackendService, 'sendAccountAccessRequestEmail').and.callThrough();
//             expect(effects$.sendAccountAccessEmail$).toBeObservable(expected);
//             expect(mockBackendService.sendAccountAccessRequestEmail).toHaveBeenCalledWith(user.id, account.id);
//         });

//         it('calls SendAccountAccessEmailSuccess', () => {
//             expect(effects$.sendAccountAccessEmail$).toBeObservable(expected);
//         });
//     });

//     describe('sendAccountAccessEmailSuccess', () => {
//         it('displays the snackbar', () => {
//             actions$ = hot('-a', { a: new SendAccountAccessEmailSuccess() });
//             effects$.sendAccountAccessEmailSuccess$.subscribe(() => {
//                 expect(store.dispatch).toHaveBeenCalledWith(
//                     new DisplaySnackbar({
//                         type: SnackbarTypes.Success,
//                         title: 'Email Sent',
//                         message: `We've sent an email to the account owner requesting your access to be restored.`
//                     })
//                 );
//             });
//         });
//     });

//     describe('switchAccounts', () => {
//         beforeEach(() => {
//             actions$ = hot('-a', { a: new SwitchAccounts(switchAccountsPayloadStub) });
//             expected = cold('-a', {
//                 a: new SwitchAccountsSuccess({
//                     id: switchAccountsPayloadStub.account.id,
//                     name: switchAccountsPayloadStub.account.data.name
//                 })
//             });
//         });

//         it('uses the updateUser method from UserService', () => {
//             spyOn(mockUserService, 'updateUser').and.callThrough();
//             expect(effects$.switchAccounts$).toBeObservable(expected);
//             expect(mockUserService.updateUser).toHaveBeenCalledWith(switchAccountsPayloadStub.userId, {
//                 sessionAccount: switchAccountsPayloadStub.account.id
//             });
//         });

//         it('calls SwitchAccountsSuccess', () => {
//             expect(effects$.switchAccounts$).toBeObservable(expected);
//         });
//     });

//     describe('switchAccountsSuccess', () => {
//         it('calls DisplaySnackbar', () => {
//             actions$ = hot('-a', {
//                 a: new SwitchAccountsSuccess(mockSwitchAccountsSuccessPayload)
//             });
//             effects$.switchAccountsSuccess$.subscribe(() => {
//                 expect(store.dispatch).toHaveBeenCalledWith(
//                     new DisplaySnackbar({
//                         type: SnackbarTypes.Success,
//                         title: `You've Switched Accounts`,
//                         message: `Now viewing ${mockSwitchAccountsSuccessPayload.name}.`
//                     })
//                 );
//             });
//         });
//     });
// });
