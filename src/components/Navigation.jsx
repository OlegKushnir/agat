import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

const Navigation = () => {
  return (
    <>
      <section className={css.header}>
        <div className={css.wrapper}>
       
        <NavLink to="/" className={css.navLink}>
        <h2 className={css.logo}>б.в. Енергетик</h2>
            </NavLink>
          <div className={css.thumb}>
            
            <NavLink to="rooms" className={css.navLink}>
              Rooms
            </NavLink>
            <NavLink to="prices" className={css.navLink}>
              Prices
            </NavLink>
            <NavLink to="map" className={css.navLink}>
              Map
            </NavLink>
            <NavLink to="contacts" className={css.navLink}>
              Contacts
            </NavLink>
          </div>
        </div>
      </section>

      <section className={css.content}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
      <Footer />
    </>
  );
};
export default Navigation;
