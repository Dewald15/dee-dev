import { Action } from '@ngrx/store';

export enum wwwUiActionTypes {
    DisplaySnackbar = '[www-Ui] Display snackbar',
    ShowSpinner = '[www-Ui] Show spinner',
    HideSpinner = '[www-Ui] Hide spinner',
    Reset = '[www-Ui] Reset'
}

export class ShowSpinner implements Action {
    readonly type = wwwUiActionTypes.ShowSpinner;
}

export class HideSpinner implements Action {
    readonly type = wwwUiActionTypes.HideSpinner;
}

export class Reset implements Action {
    readonly type = wwwUiActionTypes.Reset;
}

export type wwwUiActions = ShowSpinner | HideSpinner | Reset;
