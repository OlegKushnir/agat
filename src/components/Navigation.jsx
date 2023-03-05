import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    
      <ul className={css.thumb}>
        <li className={css.item}>
          <NavLink to="/" className={css.navLink}>
            Головна
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/rooms" className={css.navLink}>
            Номери
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/prices" className={css.navLink}>
            Ціни
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/map" className={css.navLink}>
            Розташування
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/contacts" className={css.navLink}>
            Контакти
          </NavLink>
        </li>
      </ul>
    
  );
};
export default Navigation;
