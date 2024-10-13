'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/hooks/useAuthContext';
import { ChildrenProps } from '@/types/Auth';

export default function RequireAuth({ children }: ChildrenProps) {
  const [isChecking, setIsChecking] = useState(true);
  const router = useRouter();
  const { state } = useAuthContext();
  const { user, authIsReady } = state;

  useEffect(() => {
    if (authIsReady) {
      if (!user) {
        // Redirect if not authenticated
        router.push('/login');
      } else {
        // Stop checking once we know the user is authenticated
        setIsChecking(false);
      }
    }
  }, [authIsReady, user]);

  // If auth state is not ready yet, return nothing or a loading spinner
  if (isChecking || !authIsReady) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, render the children (protected content)
  return <>{children}</>;
}
