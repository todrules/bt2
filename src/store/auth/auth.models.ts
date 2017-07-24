import { Employee } from '../../swagger/model/employee';

export interface AuthState {
  isAuthenticated: boolean;
  access_token?: string | null;
  profile?: Employee | null;
}

export interface AuthToken {
  idToken?: string;
  id_token?: string;
  accessToken?: string;
  idTokenPayload?: TokenPayload;
  refreshToken?: string;
  refresh_token?: string;
  state?: Object;
  profile?: Object;
  access_token?: string;
  token_type?: string;
}

export interface TokenPayload {
  aud?: string;
  exp?: number;
  iat?: number;
  iss?: string;
  sub?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  nickname?: string;
  picture?: string;
  app_metadata?: any;
  identities?: Array<any>;
  roles?: Array<any>;
  user_id?: string;
}

export interface UserProfile {
  user_id: string | null;
  email?: string | null;
  email_verified?: boolean;
  name?: string | null;
  nickname?: string | null;
  picture?: string | null;
  identities?: Array<Identity> | null;
  user_metadata?: Object | null;
}

interface Identity {
  connection: string;
  isSocial: boolean;
  provider: string;
  user_id: string;
}

export enum Connection {
  Google,
  Github,
  DBConn,
  Facebook,
  Twitter,
  'Username-Password-Authentication'

}

export interface Credentials {
  email: string;
  password: string;
}

export interface PopupOptions {
  width: number;
  height: number;
}
