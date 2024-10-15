import { User } from 'firebase/auth';

export interface LoginHook {
  error: ErrorInterface | null;
  isPending: boolean;
  login: (email: string, password: string) => Promise<void>;
}

export interface SignupHook {
  error: ErrorInterface | null;
  isPending: boolean;
  signupWithEmailAndPassword: (
    email: string,
    password: string,
    displayName: string,
  ) => Promise<void>;
  signupWithGoogle: () => Promise<void>;
}

export interface ErrorInterface {
  code: string;
  message: string;
}

export type AuthState = {
  user: User | null;
  authIsReady: boolean;
};

export type AuthAction =
  | { type: 'LOGIN'; payload: User | null }
  | { type: 'LOGOUT' }
  | { type: 'AUTH_IS_READY'; payload: User | null };
