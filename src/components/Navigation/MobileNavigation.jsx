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
            Home
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/rooms"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Rooms
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/prices"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Prices
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/map"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Location
          </NavLink>
        </li>
        <li className={css.mobile__item}>
          <NavLink
            to="/contacts"
            className={css.navLink}
            onClick={() => updateMobileHidden(!mobileHidden)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <a href="tel:+381111111111" className={css.booking}>
        Book Now
      </a>
    </div>
  );
};
export default MobileNavigation;

MobileNavigation.propTypes = {
  mobileHidden: PropTypes.bool.isRequired,
  updateMobileHidden: PropTypes.func.isRequired,
};