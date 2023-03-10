import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    
      <ul className={css.thumb}>
        <li className={css.item}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/rooms" className={css.navLink}>
            Rooms
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/prices" className={css.navLink}>
            Prices
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/map" className={css.navLink}>
            Location
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts" className={css.navLink}>
            Contacts
          </NavLink>
        </li>
      </ul>
    
  );
};
export default Navigation;
