'use client';

import { useAuthContext, useThemeContext } from '../hooks/useContext';
import { useLogout } from '../hooks/useLogout';
import ThemeIcon from '@/public/sun.svg';

export default function Header() {
  const { logout } = useLogout();
  const { state } = useAuthContext();
  const { user } = state;
  const { toggleTheme } = useThemeContext();

  return (
    <header className='navbar bg-background'>
      <div className='px-4 py-2'>
        <div className='flex items-center justify-end'>
          <ul className='flex items-center gap-4'>
            <li onClick={toggleTheme} className='cursor-pointer'>
              <ThemeIcon width={24} height={24} alt='text' />
            </li>
            {user && (
              <>
                <li className='text-nowrap'>
                  <span className='max-sm:hidden'>Привет, </span>
                  {user.email}
                </li>
                <li>
                  <button
                    className='button focus-red bg-red-500'
                    onClick={logout}>
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
