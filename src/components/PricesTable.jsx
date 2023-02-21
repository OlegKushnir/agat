import dates from '../db/seasonDates.json';
import { NavLink } from 'react-router-dom';
import app from './App.module.css';
import css from './Prices.module.css';

const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;

const Table = ({ roomType, rooms }) => {
  return (
    <table className={app.tableGeneral}>
      <caption className={app.title}>{roomType}</caption>
      <thead>
        <tr>
          <td className={app.tableTitle}>
            Тип номера
          </td>
          <td className={app.tableTitle}>
            Ціна
            <p>{priceLowBefore}</p>
          </td>
          <td className={app.tableTitle}>
            Ціна
            <p>{priceMiddle}</p>
          </td>
          <td className={app.tableTitle}>
            Ціна
            <p>{priceHigh}</p>
          </td>
          <td className={app.tableTitle}>
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
