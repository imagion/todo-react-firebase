'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import { cn } from '@/lib/utils';
// import ThemeSelector from './ThemeSelector';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { logout } = useLogout();
  const { state } = useAuthContext();
  const { user } = state;

  return (
    <header className='navbar'>
      <div className='container--full'>
        <div className='flex items-center justify-between bg-neutral-500'>
          <Link
            href='/'
            className='text-[2rem] font-semibold uppercase text-neutral-800'>
            Todo
          </Link>
          <button
            className={cn('navbar__toggle', open ? 'open' : '')}
            onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={cn('navbar-main', open ? 'open' : '')}>
            <nav className='navigation'>
              <ul className='flex flex-wrap items-center'>
                <li className='navigation__item'>{/* <ThemeSelector /> */}</li>
                {/* conditionally show buttons if user is logged in */}
                {user ? (
                  <>
                    <li className='navigation__item'>hello, {user.email}</li>
                    <li className='navigation__item rounded-xl bg-red-700 p-1'>
                      <button className='btn' onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='navigation__item'>
                      <Link
                        href='/login'
                        className='navlink'
                        onClick={() => setOpen(false)}>
                        Login
                      </Link>
                    </li>
                    <li className='navigation__item'>
                      <Link
                        href='/signup'
                        className='navlink'
                        onClick={() => setOpen(false)}>
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
