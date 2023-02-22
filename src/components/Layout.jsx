import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import app from './App.module.css';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import { useState } from 'react';

const Layout = () => {
  const { pathname } = useLocation();
  const [mobileHidden, updateMobileHidden] = useState(true);
  
  return (
    <>
      <header>
        <div className={app.container}>
          <div className={css.wrapper}>
            <div className={app.logo__thumb}>
              <NavLink to="/" className={css.navLink}>
                <span className={app.logo}>Енергетик</span>
              </NavLink>
            </div>

            <button
              type="button"
              className={css.menu__button}
              onClick={() => updateMobileHidden(!mobileHidden)}
            >
              <svg width="40" height="40">
                <use href="icons.svg#menu_40px"></use>
              </svg>
            </button>
            {mobileHidden ? (
              <Navigation />
            ) : (
              <MobileNavigation
                mobileHidden={mobileHidden}
                updateMobileHidden={updateMobileHidden}
              />
            )}
          </div>
        </div>
      </header>
      <section className={app.content}>
        <div className={pathname === '/' ? '' : app.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Layout;
