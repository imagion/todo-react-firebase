'use client';

import { PropsWithChildren, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/hooks/useContext';

export default function RequireAuth({ children }: PropsWithChildren) {
  const [isChecking, setIsChecking] = useState<boolean>(true);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authIsReady, user]);

  // If auth state is not ready yet, return nothing or a loading spinner
  if (isChecking || !authIsReady) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, render the children (protected content)
  return <>{children}</>;
}
