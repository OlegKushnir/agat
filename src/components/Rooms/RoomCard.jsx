import app from '../App.module.css';
import css from './Rooms.module.css';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import seasonDAtes from '../../db/seasonDates.json';
import fillingArr from '../../db/filling.json';
import PropTypes from 'prop-types';

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
            <p className={app.thinText}> {persons} - pessons</p>
          </h3>
          <ul className={css.prices}>
            <li className={app.text}>
              {seasonDAtes.priceLowBefore} : {priceLow} USD
            </li>
            <li className={app.text}>
              {seasonDAtes.priceMiddle} : {priceMiddle} USD
            </li>
            <li className={app.text}>
              {seasonDAtes.priceHigh} : {priceHigh} USD
            </li>
            <li className={app.text}>
              {seasonDAtes.priceLowAfter} : {priceLow} USD
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

RoomCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  persons: PropTypes.number.isRequired,
  priceHigh: PropTypes.number.isRequired,
  priceLow: PropTypes.number.isRequired,
  priceMiddle: PropTypes.number.isRequired,
  filling: PropTypes.arrayOf(PropTypes.number).isRequired,
  images:PropTypes.arrayOf(PropTypes.string).isRequired,
};
