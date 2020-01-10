import { NavigationExtras } from '@angular/router';

import { Action } from '@ngrx/store';

export enum RouterActionTypes {
    Go = '[Router] Go',
    Back = '[Router] Back',
    Forward = '[Router] Forward',
    Download = '[Router] Download',
    OpenUrl = '[Router] Open url'
}

export class Go implements Action {
    readonly type = RouterActionTypes.Go;
    constructor(public payload: { path: any[]; query?: object; extras?: NavigationExtras }) {}
}

export class Back implements Action {
    readonly type = RouterActionTypes.Back;
}

export class Forward implements Action {
    readonly type = RouterActionTypes.Forward;
}

export class Download implements Action {
    readonly type = RouterActionTypes.Download;
    constructor(public url: string) {}
}

export class OpenUrl implements Action {
    readonly type = RouterActionTypes.OpenUrl;
    constructor(public url: string) {}
}

export type RouterActions = Go | Back | Forward;
