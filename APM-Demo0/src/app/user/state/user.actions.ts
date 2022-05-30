import { createAction, props } from '@ngrx/store';
import { User } from '../user';

export const maskUserName = createAction(
  '[User] Mask User Name'
);

export const setCurrentUser = createAction(
  '[User] Set Current User (Login)',
  props<{ user: User }>()
);

export const clearCurrentUser = createAction(
  '[User] Clear Current User (Logout)'
);

export const createNewUser = createAction(
  '[User] Create New User'
);
