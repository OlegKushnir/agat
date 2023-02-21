import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import prices from '../db/prices.json';
import seasonDAtes from '../db/seasonDates.json';
import roomTypes from '../db/types.json';

const Rooms = () => {
  const { roomType } = useParams();
  const rooms = prices.filter(room => room.type === roomType);
  const { images } = roomTypes.find(room => room.type === roomType);

  return (
    <div className={app.wrapper}>
      <ul className={css.list}>
        {rooms.map(
          ({ id, title, persons, priceLow, priceMiddle, priceHigh }) => (
            <li key={id} className={app.item}>
              <NavLink to={id} className={css.navLink}>
                <div className={app.imgWrapper}>
                  <img
                    className={app.roomImg}
                    src={`../${images[0]}`}
                    width="320px"
                    height="240px"
                    alt={title}
                  ></img>
                </div>
                <div className={app.infoWrapper}>
                  <h3 className={app.title}>
                    {title}{' '}
                    <span className={app.thinText}> {persons}-х містний</span>
                  </h3>
                  <ul className={css.prices}>
                    <li className={app.text}>
                      {seasonDAtes.priceLowBefore} : {priceLow} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceMiddle} : {priceMiddle} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceHigh} : {priceHigh} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceLowAfter} : {priceLow} грн
                    </li>
                  </ul>
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default Rooms;
