import dates from '../../db/seasonDates.json';
import { NavLink } from 'react-router-dom';
import app from '../App.module.css';
import css from './Prices.module.css';
import PropTypes from 'prop-types';

const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;
const currentPrice = dates => {
  const getDate = str => {
    const year = new Date().getFullYear();
    const [day, month] = str.split('.');
    return new Date(`${year}-${month}-${day}`);
  };
  const startDate = Date.parse(getDate(dates.split('-')[0]));
  const endDate = Date.parse(getDate(dates.split('-')[1]));
  const today = Date.now();
  if (today >= startDate && today <= endDate) return true;
  else return false;
};

const Table = ({ roomType, rooms }) => {
  return (
    <table className={app.table}>
      <caption className={app.title}>{roomType}</caption>
      <thead>
        <tr>
          <td className={app.table__title}>Room type</td>
          <td className={app.table__title}>
            Price
            <p>{priceLowBefore}</p>
          </td>
          <td className={app.table__title}>
            Price
            <p>{priceMiddle}</p>
          </td>
          <td className={app.table__title}>
            Price
            <p>{priceHigh}</p>
          </td>
          <td className={app.table__title}>
            Price
            <p>{priceLowAfter}</p>
          </td>
        </tr>
      </thead>
      {rooms[roomType].map(room => (
        <tbody key={room.id}>
          <tr className={css.priceInfo}>
            <td className={app.table__room}>
              <NavLink
                to={`/rooms/${roomType}/${room.id}`}
                className={css.link}
              >
                {room.title} <p> {room.persons}- persons</p>
              </NavLink>
            </td>
            <td className={currentPrice(priceLowBefore) ? css.current : ''}>
              {room.priceLow}
            </td>
            <td className={currentPrice(priceMiddle) ? css.current : ''}>
              {room.priceMiddle}
            </td>
            <td className={currentPrice(priceHigh) ? css.current : ''}>
              {room.priceHigh}
            </td>
            <td className={currentPrice(priceLowAfter) ? css.current : ''}>
              {room.priceLow}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Table;

Table.propTypes = {
  rooms: PropTypes.PropTypes.shape(
    {
      [PropTypes.string.isRequired]: PropTypes.arrayOf(
        PropTypes.PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          persons: PropTypes.number.isRequired,
          priceHigh: PropTypes.number.isRequired,
          priceLow: PropTypes.number.isRequired,
          priceMiddle: PropTypes.number.isRequired,
        }).isRequired
      ).isRequired,
    }.isRequired
  ).isRequired,
  roomType: PropTypes.string.isRequired,
};
