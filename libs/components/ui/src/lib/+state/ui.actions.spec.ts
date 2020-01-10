// import { SnackbarTypes, mockAccount } from '@dee-dev/core/types';

// import {
//     UiActionTypes,
//     DisplaySnackbar,
//     ShowSpinner,
//     HideSpinner,
//     SendVerifyEmail,
//     SignOut,
//     SwitchAccounts,
//     SwitchAccountsSuccess,
//     Reset,
//     SendAccountAccessEmailSuccess,
//     SendAccountAccessEmail
// } from './ui.actions';

// describe('Ui Actions', () => {
//     let actionResult;
//     const snackbar = { message: 'message' };
//     const switchAccountsPayloadStub = { userId: '1', account: { id: '1', data: mockAccount } };

//     describe('DisplaySnackbar', () => {
//         it('creates an action of type DisplaySnackbar', () => {
//             actionResult = new DisplaySnackbar(snackbar);
//             expect(actionResult.type).toEqual(UiActionTypes.DisplaySnackbar);
//             expect(actionResult.snackbar).toEqual({
//                 message: snackbar.message,
//                 type: SnackbarTypes.Info,
//                 title: 'Take Note'
//             });
//         });
//     });

//     describe('ShowSpinner', () => {
//         it('creates an action of type ShowSpinner', () => {
//             actionResult = new ShowSpinner();
//             expect(actionResult.type).toEqual(UiActionTypes.ShowSpinner);
//         });
//     });

//     describe('HideSpinner', () => {
//         it('creates an action of type HideSpinner', () => {
//             actionResult = new HideSpinner();
//             expect(actionResult.type).toEqual(UiActionTypes.HideSpinner);
//         });
//     });

//     describe('Reset', () => {
//         it('creates an action of type Reset', () => {
//             actionResult = new Reset();
//             expect(actionResult.type).toEqual(UiActionTypes.Reset);
//         });
//     });

//     describe('SendVerifyEmail', () => {
//         it('creates an action of type SendVerifyEmail', () => {
//             actionResult = new SendVerifyEmail();
//             expect(actionResult.type).toEqual(UiActionTypes.SendVerifyEmail);
//         });
//     });

//     describe('SendAccountAccessEmail', () => {
//         it('creates an action of type SendVerifyEmail', () => {
//             actionResult = new SendAccountAccessEmail();
//             expect(actionResult.type).toEqual(UiActionTypes.SendAccountAccessEmail);
//         });
//     });

//     describe('SendAccountAccessEmailSuccess', () => {
//         it('creates an action of type SendAccountAccessEmailSuccess', () => {
//             actionResult = new SendAccountAccessEmailSuccess();
//             expect(actionResult.type).toEqual(UiActionTypes.SendAccountAccessEmailSuccess);
//         });
//     });

//     describe('SignOut', () => {
//         it('creates an action of type SignOut', () => {
//             actionResult = new SignOut();
//             expect(actionResult.type).toEqual(UiActionTypes.SignOut);
//         });
//     });

//     describe('SwitchAccounts', () => {
//         it('creates an action of type SwitchAccounts', () => {
//             actionResult = new SwitchAccounts(switchAccountsPayloadStub);
//             expect(actionResult.type).toEqual(UiActionTypes.SwitchAccounts);
//             expect(actionResult.payload).toEqual(switchAccountsPayloadStub);
//         });
//     });

//     describe('SwitchAccountsSuccess', () => {
//         it('creates an action of type SwitchAccountsSuccess', () => {
//             const mockSwitchAccountsSuccessPayload = { id: '1', name: 'name' };
//             actionResult = new SwitchAccountsSuccess(mockSwitchAccountsSuccessPayload);
//             expect(actionResult.type).toEqual(UiActionTypes.SwitchAccountsSuccess);
//             expect(actionResult.payload).toEqual(mockSwitchAccountsSuccessPayload);
//         });
//     });
// });
