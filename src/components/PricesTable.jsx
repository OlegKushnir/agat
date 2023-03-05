import dates from '../db/seasonDates.json';
import { NavLink } from 'react-router-dom';
import app from './App.module.css';
import css from './Prices.module.css';

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
          <td className={app.table__title}>Тип номера</td>
          <td className={app.table__title}>
            Ціна
            <p>{priceLowBefore}</p>
          </td>
          <td className={app.table__title}>
            Ціна
            <p>{priceMiddle}</p>
          </td>
          <td className={app.table__title}>
            Ціна
            <p>{priceHigh}</p>
          </td>
          <td className={app.table__title}>
            Ціна
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
                {room.title} {room.persons}-х місний
              </NavLink>
            </td>
            <td className={currentPrice(priceLowBefore) ? css.current : ''}>{room.priceLow}</td>
            <td className={currentPrice(priceMiddle) ? css.current : ''}>{room.priceMiddle}</td>
            <td className={currentPrice(priceHigh) ? css.current : ''}>{room.priceHigh}</td>
            <td className={currentPrice(priceLowAfter) ? css.current : ''}>{room.priceLow}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Table;
