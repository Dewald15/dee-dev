import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs';
import { tap, switchMap, map, catchError } from 'rxjs/operators';

import { RouterActionTypes, Go, Back, Forward, Download, OpenUrl } from './router.actions';

type State = null;

@Injectable({
    providedIn: 'root'
})
export class RouterEffects {
    @Effect({ dispatch: false })
    go$ = this.actions$.ofType(RouterActionTypes.Go).pipe(
        map((action: Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => this._router.navigate(path, { queryParams, ...extras }))
    );

    @Effect({ dispatch: false })
    back$ = this.actions$.ofType(RouterActionTypes.Back).pipe(tap(() => this._location.back()));

    @Effect({ dispatch: false })
    forward$ = this.actions$.ofType(RouterActionTypes.Forward).pipe(tap(() => this._location.forward()));

    @Effect({ dispatch: false })
    download$ = this.actions$.ofType(RouterActionTypes.Download).pipe(
        map((action: Download) => action.url),
        tap(url => window.open(url))
    );

    @Effect({ dispatch: false })
    open$ = this.actions$.ofType(RouterActionTypes.OpenUrl).pipe(
        map((action: OpenUrl) => action.url),
        tap(url => window.open(url, '_blank'))
    );

    constructor(private actions$: Actions, private _store: Store<State>, private _router: Router, private _location: Location) {}
}
