import { User } from 'firebase/auth';

// Define the shape of the state
export type AuthState = {
  user: User | null;
  authIsReady: boolean;
};

// Define the types for the action
export type AuthAction =
  | { type: 'LOGIN'; payload: User | null }
  | { type: 'LOGOUT' }
  | { type: 'AUTH_IS_READY'; payload: User | null };

// Define the props for the AuthContextProvider
export type ChildrenProps = {
  children: React.ReactNode;
};
