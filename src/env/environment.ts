import { InjectionToken } from '@angular/core';

// Development Env. variables
export const environment = 'development';
export const env = environment;
export const ENV = env;

export const API_PATH = '/api';
export const API_BASE_HOST = 'localhost';
export const API_PROTOCOL = 'http';
export const API_PORT = 8080;
export const API_BASE_URL = `${API_PROTOCOL}://${API_BASE_HOST}${API_PORT ? ':' + API_PORT : null}${API_PATH}`;

export const BASE_HOST = 'localhost';
export const PROTOCOL = 'http';
export const PORT = 4200;
export const BASE_URL = `${PROTOCOL}://${BASE_HOST}${PORT ? ':' + PORT : null}`;


export const BASE_PATH = 'http://localhost:8080/api';
