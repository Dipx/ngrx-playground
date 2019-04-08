import { EConfigActions, ConfigActions } from "../actions/config.action";
import { IConfigState } from "../state/config.state";

export const configReducer = (
    state: IConfigState,
    action: ConfigActions
): IConfigState {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess:
            return {
                ...state,
                config: action.payload
            }
        default:
            return state;
    }
}