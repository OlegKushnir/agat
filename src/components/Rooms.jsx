import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';


const Rooms = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="rooms" className={css.navLink}>
          <img src="../img/f41_480.jpg" width='480px' alt="room1" ></img>
            Room 1
          </NavLink>
        </li>
        <li><NavLink to="rooms" className={css.navLink}>
        <img src="../img/f41_480.jpg" alt="room2" ></img>
            Room 2
          </NavLink></li>
      </ul>
    </div>
  );
};
export default Rooms;
