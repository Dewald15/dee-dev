import { wwwUiActions, wwwUiActionTypes } from './ui.actions';

export interface WwwUiData {
    showspinner: boolean;
}

export interface WwwUiState {
    readonly ui: WwwUiData;
}

export const wwwUiInitialState: WwwUiData = {
    showspinner: false
};

export function wwwUiReducer(state = wwwUiInitialState, action: wwwUiActions): WwwUiData {
    switch (action.type) {
        case wwwUiActionTypes.ShowSpinner:
            return { ...state, showspinner: true };
        case wwwUiActionTypes.HideSpinner:
            return { ...state, showspinner: false };
        case wwwUiActionTypes.Reset:
            return { ...wwwUiInitialState };
        default:
            return state;
    }
}
