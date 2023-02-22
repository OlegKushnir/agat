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
      <header>
        <div className={app.container}>
          <div className={css.wrapper}>
            <NavLink to="/" className={css.navLink}>
              <span className={app.logo}>Енергетик</span>
            </NavLink>

            <ul className={css.thumb}>
            <li className={css.item}>
                <NavLink to="/" className={css.navLink}>
                  Головна
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="rooms" className={css.navLink}>
                  Номери
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="prices" className={css.navLink}>
                  Ціни
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="map" className={css.navLink}>
                  Розташування
                </NavLink>
              </li>
              <li className={css.item}>
                <NavLink to="contacts" className={css.navLink}>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
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
