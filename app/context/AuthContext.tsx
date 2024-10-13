'use client';

import { createContext, Dispatch, useEffect, useReducer } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { AuthState, AuthAction, ChildrenProps } from '@/types/Auth';

// Define the initial state
export const initialState: AuthState = {
  user: null,
  authIsReady: false,
};

export const AuthContext = createContext<
  { state: AuthState; dispatch: Dispatch<AuthAction> } | undefined
>(undefined);

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // get user information from firebase on first render
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: 'AUTH_IS_READY', payload: user });
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
