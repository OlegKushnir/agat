import app from './App.module.css';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import roomTypes from '../db/types.json';

const RoomTypes = () => {
  return (
    <div className={app.wrapper}>
      <ul className={css.list}>
        {roomTypes.map(({ id, type, descr, images }) => (
          <li key={id} className={css.item}>
            <NavLink to={`/rooms/${type}`} className={css.navLink}>
              <div className={app.imgWrapper}>
                <img
                  src={images[0]}
                  width="320px"
                  height="240px"
                  alt={type}
                ></img>
              </div>
              <div className={app.infoWrapper}>
                <h3 className={app.title}>{type}</h3>
                <ul className={css.prices}>
                  <li className={app.text}>{descr}</li>
                </ul>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RoomTypes;
