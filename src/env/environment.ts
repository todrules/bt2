import { InjectionToken } from '@angular/core';

// Production Env. variables
export const environment = 'production';
export const env = environment;
export const ENV = env;

export const API_PATH = '/api';
export const API_BASE_HOST = 'bt-demo-001.herokuapp.com';
export const API_PROTOCOL = 'https';
export const API_PORT = null;
export const API_BASE_URL = `${API_PROTOCOL}://${API_BASE_HOST}${API_PORT ? ':' + API_PORT : null}${API_PATH}`;

export const BASE_HOST = 'localhost';
export const PROTOCOL = 'http';
export const PORT = 4200;
export const BASE_URL = `${PROTOCOL}://${BASE_HOST}${PORT ? ':' + PORT : null}`;

export const BASE_PATH = new InjectionToken<string>('https://bt-demo-001.herokuapp.com/api');
