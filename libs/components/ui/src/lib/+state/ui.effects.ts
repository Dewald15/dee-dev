import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

import { map, tap, delay } from 'rxjs/operators';

import { store as routerStore } from '@dee-dev/core/router';

import { wwwUiActionTypes, HideSpinner, ShowSpinner } from './ui.actions';

type State = null;

@Injectable( { providedIn: 'root' } )
export class WwwUiEffects {
    @Effect( { dispatch: false } )
    navigateStart$ = this.actions$.ofType( routerStore.RouterActionTypes.Go ).pipe( tap( () => this._store.dispatch( new ShowSpinner() ) ) );

    @Effect( { dispatch: false } )
    onNgrxRouterNavigation$ = this.actions$.ofType( ROUTER_NAVIGATION ).pipe(
        delay( 1500 ),
        tap( () => this._store.dispatch( new HideSpinner() ) )
    );

    private _setSnackbarClasses ( type: string ) {
        switch ( type ) {
            case 'success':
                return ['dee-snackbar', 'dee-snackbar-success'];
            case 'info':
                return ['dee-snackbar', 'dee-snackbar-info'];
            case 'error':
                return ['dee-snackbar', 'dee-snackbar-error'];
            default:
                return ['dee-snackbar'];
        }
    }

    constructor ( private actions$: Actions, private _snack: MatSnackBar, private _store: Store<State> ) { }
}
