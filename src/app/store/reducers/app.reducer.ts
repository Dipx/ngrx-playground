import { ActionReducerMap } from "@ngrx/store";

import { routerReducer } from "@ngrx/router-store";
import { IAppState } from "../state/app.state";
import { configReducer } from "./config.reducer";
import { userReducer } from "./User.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    config: configReducer,
    users: userReducer
}