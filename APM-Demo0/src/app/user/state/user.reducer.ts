import { createAction, createReducer, on } from '@ngrx/store';

export const userReducer = createReducer(
  { maskUserName: true },
  on(createAction('[User] Toggle Mask Username'), state => {
    console.log('Original State of MaskUsername : ' + JSON.stringify(state));
    return {
      ...state,
      maskUserName: !state.maskUserName
    };
  })
);
