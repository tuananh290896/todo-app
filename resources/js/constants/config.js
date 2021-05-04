export const BASE_URL = 'http://localhost:8000/api/v1';
export const AUTH_LOGIN_URL = 'auth/login';
export const AUTH_REGISTER_URL = 'auth/register';
export const AUTH_INFO_URL = 'auth/me';

export const LIST_NOTE_URL = 'notes';
export const CREATE_NOTE_URL = 'notes/store';
export const DELETE_NOTE_URL = (id) => `notes/delete/${id}`;