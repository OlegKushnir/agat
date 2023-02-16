import dates from '../db/seasonDates.json';
import { NavLink } from 'react-router-dom';
import css from './Prices.module.css';

const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;

const Table = ({ roomType, rooms }) => {
  return (
    <table className={css.tableGeneral}>
      <caption className={css.type}>{roomType}</caption>
      <thead>
        <tr>
          <td className={css.priceTitle}>
            Тип номера
          </td>
          <td className={css.priceTitle}>
            Ціна
            <p>{priceLowBefore}</p>
          </td>
          <td className={css.priceTitle}>
            Ціна
            <p>{priceMiddle}</p>
          </td>
          <td className={css.priceTitle}>
            Ціна
            <p>{priceHigh}</p>
          </td>
          <td className={css.priceTitle}>
            Ціна
            <p>{priceLowAfter}</p>
          </td>
        </tr>
      </thead>
      {rooms[roomType].map(room => (
        <tbody key={room.id}>
          <tr className={css.priceInfo}>
            <td>
              <NavLink to={`/rooms/${roomType}/${room.id}`} className={css.link}>
                {room.title} {room.persons}-х місний
              </NavLink>
            </td>
            <td>{room.priceLow}</td>
            <td>{room.priceMiddle}</td>
            <td>{room.priceHigh}</td>
            <td>{room.priceLow}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default Table;
