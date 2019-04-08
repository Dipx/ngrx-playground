import { RouterReducerState } from "@ngrx/router-store";

import { IConfigState, initialConfigState } from "./config.state";
import { IUserState, initialUserState } from "./user.state";

export interface IAppState {
    router?: RouterReducerState,
    users: IUserState,
    config: IConfigState
}

export const initialAppState: IAppState = {
    config: initialConfigState,
    users: initialUserState
}

export function getInitialState(): IAppState {
    return initialAppState;
}