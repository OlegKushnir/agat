
import app from '../App.module.css';
import css from './Rooms.module.css';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import seasonDAtes from '../../db/seasonDates.json';
import fillingArr from '../../db/filling.json';

const RoomCard = ({
  id,
  title,
  persons,
  priceLow,
  priceMiddle,
  priceHigh,
  filling,
  images,
}) => {
const { ref, inView } = useInView({
    threshold: 0,
  });
  const fillingIcon = id => {
    return fillingArr.find(el => el.id === id);
  };

  return (
    <li ref={ref} className={!inView ? app.item : `${app.item} ${app.show}`}>
      <NavLink to={id} className={css.navLink}>
        <div className={app.imgWrapper}>
          <img
            className={app.roomImg}
            src={images?.length ? `../${images[0].split('.')[0]}_480.jpg` : ''}
            width="320"
            height="240"
            alt={title}
          ></img>
        </div>
        <div className={app.infoWrapper}>
          <h3 className={app.title}>
            {title}
            <p className={app.thinText}> {persons} - місний</p>
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

          <ul className={app.filling}>
            {filling.map(el => (
              <li
                key={el}
                className={app.filling__item}
                title={fillingIcon(el).title}
              >
                <svg className={app.icon} width="27" height="27">
                  <use href={fillingIcon(el).iconURL}></use>
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </NavLink>
    </li>
  );
};
export default RoomCard;
