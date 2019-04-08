import { EUserActions, UserActions } from "./../actions/user.action";
import { IUserState, initialUserState } from "../state/user.state";

export const userReducer = (
    state = initialUserState,
    action: UserActions
): IUserState => {
    switch (action.type) {
        case EUserActions.GetUserSuccess:
            return {
                ...state,
                selectedUser: action.payload
            };
        case EUserActions.GetUsersSuccess:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}