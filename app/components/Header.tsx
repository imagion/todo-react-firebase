'use client';

import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import ThemeIcon from '@/public/sun.svg';

export default function Header() {
  const { logout } = useLogout();
  const { state } = useAuthContext();
  const { user } = state;

  return (
    <header className='navbar bg-neutral-500'>
      <div className='px-4 py-2'>
        <div className='flex items-center justify-end'>
          <ul className='flex items-center gap-4'>
            <li className='cursor-pointer'>
              <ThemeIcon width={24} height={24} />
            </li>
            {user && (
              <>
                <li className='text-nowrap'>
                  <span className='max-sm:hidden'>Привет, </span>
                  {user.email}
                </li>
                <li className='rounded-xl bg-red-700 p-1'>
                  <button className='btn' onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
