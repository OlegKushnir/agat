import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const MobileNavigation = ({mobileHidden, updateMobileHidden}) => {
  return (
    <>
      
      <ul className={css.mobile__menu}>
        <li className={css.mobile__item}>
          <NavLink to="/" className={css.navLink} onClick={() => updateMobileHidden(!mobileHidden)}>
            Головна
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink to="/rooms" className={css.navLink} onClick={() => updateMobileHidden(!mobileHidden)}>
            Номери
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink to="/prices" className={css.navLink} onClick={() => updateMobileHidden(!mobileHidden)}>
            Ціни
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink to="/map" className={css.navLink} onClick={() => updateMobileHidden(!mobileHidden)}>
            Карта
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink to="/contacts" className={css.navLink} onClick={() => updateMobileHidden(!mobileHidden)}>
            Контакти
          </NavLink>
        </li>
      </ul>
    </>
  );
};
export default MobileNavigation;
