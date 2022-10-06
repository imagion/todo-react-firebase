import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import ThemeSelector from './ThemeSelector'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <header className='navbar'>
      <div className='container--full'>
        <div className='navbar-wrap'>
          <Link to='/' className='navbar__logo'>
            Todo
          </Link>
          <button
            className={`navbar__toggle${open ? ' open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`navbar-main${open ? ' open' : ''}`}>
            <nav className='navigation'>
              <ul className='navigation__menu'>
                <li className='navigation__item'>
                  <ThemeSelector />
                </li>
                {/* conditionally show buttons if user is logged in */}
                {user ? (
                  <>
                    <li className='navigation__item'>hello, {user.email}</li>
                    <li className='navigation__item'>
                      <button className='btn' onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className='navigation__item'>
                      <Link
                        to='/login'
                        className='navlink'
                        onClick={() => setOpen(false)}
                      >
                        Login
                      </Link>
                    </li>
                    <li className='navigation__item'>
                      <Link
                        to='/signup'
                        className='navlink'
                        onClick={() => setOpen(false)}
                      >
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
  )
}
