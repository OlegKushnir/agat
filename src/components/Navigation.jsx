import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import app from './App.module.css';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';


const Navigation = () => {
  const {pathname} = useLocation();
  return (
    <>
      <section className={css.header}>
        <div className={app.container}>
          <div className={css.wrapper}>
            <NavLink to="/" className={css.navLink}>
              <h2 className={`${app.logo} ${css.logo}`}>б.в. Енергетик</h2>
            </NavLink>

            <ul className={css.thumb}>
              <li className={css.item}>
                <NavLink to="rooms" className={css.navLink}>
                  Rooms
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="prices" className={css.navLink}>
                  Prices
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="map" className={css.navLink}>
                  Map
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="contacts" className={css.navLink}>
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={app.content}>
        <div className={pathname === '/' ? "" : app.container}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Navigation;
