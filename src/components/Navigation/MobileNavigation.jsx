import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MobileNavigation = ({ mobileHidden, updateMobileHidden }) => {
  return (
    <div
      className={
        mobileHidden ? css.mobile__menu : `${css.mobile__menu} ${css.show}`
      }
    >
      <ul>
        <li className={css.mobile__item}>
          <NavLink
            to="/"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Головна
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/rooms"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Номери
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/prices"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Ціни
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/map"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Карта
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/contacts"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Контакти
          </NavLink>
        </li>
      </ul>
      <a href="tel:+380677085568" className={css.booking}>
        Забронювати номер
      </a>
    </div>
  );
};
export default MobileNavigation;

MobileNavigation.propTypes = {
  mobileHidden: PropTypes.bool.isRequired,
  updateMobileHidden: PropTypes.func.isRequired,
};