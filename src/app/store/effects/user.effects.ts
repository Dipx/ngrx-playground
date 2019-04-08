import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from "@ngrx/effects";
import { Store, select } from "@ngrx/store";
import { of } from "rxjs";
import { switchMap, map, withLatestFrom } from "rxjs/operators";

import { IAppState } from "../state/app.state";
import { GetUser, EUserActions, GetUserSuccess, GetUsers, GetUsersSuccess } from '../actions/user.action';

@Injectable()
export class UserEffects {
    @Effect()
    getUser$ = this._action$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser))
        })
    );

    @Effect()
    getUsers$ = this._action$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    )

    constructor(
        private _userService: UserService,
        private _action$: Actions,
        private _store: Store<IAppState>
    ) {}
}