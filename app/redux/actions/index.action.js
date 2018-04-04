import {createAction} from 'redux-actions';

export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SIGN_FACEBOOK = 'SIGN_FACEBOOK';
export const SIGN_GOOGLE = 'SIGN_GOOGLE';
export const SIGN_EMAIL = 'SIGN_EMAIL';

export const showloader = createAction(SHOW_LOADER);
export const hideloader = createAction(HIDE_LOADER);
export const facebook = createAction(SIGN_FACEBOOK);
export const google = createAction(SIGN_GOOGLE);
export const email = createAction(SIGN_EMAIL);