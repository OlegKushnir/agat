import app from './App.module.css';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const RoomItem = ({ type, descr, image }) => {

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <li ref={ref} className={!inView ? app.item : `${app.item} ${app.show}`}>
      <NavLink to={`/rooms/${type}`} className={css.navLink}>
        <div className={app.imgWrapper}>
          <img
            className={app.roomImg}
            src={`/agat/${image?.split('.')[0]}_480.jpg`}
            width="320"
            height="240"
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
  );
};
export default RoomItem;
