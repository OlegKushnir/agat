import dates from '../db/seasonDates.json';
import { NavLink } from 'react-router-dom';
import css from './Prices.module.css';


const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;

const Table = (room) => {
    console.log('Table room', room);
    return (
      <table>
        <thead>
          <tr>
            <td>
              <b>Тип номера</b>
            </td>
            <td>
              <b>Ціна</b>
              {priceLowBefore}
            </td>
            <td>
              <b>Ціна</b>
              {priceMiddle}
            </td>
            <td>
              <b>Ціна</b> {priceHigh}
            </td>
            <td>
              <b>Ціна</b>
              {priceLowAfter}
            </td>
          </tr>
        </thead>


        <tbody key={room.id}>
      <tr className={css.type}>
        <td>{room.type}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>
          <NavLink to="#" className={css.link}>
            {room.title} {room.persons}-х місний
          </NavLink>
        </td>
        <td>{room.priceLow}</td>
        <td>{room.priceMiddle}</td>
        <td>{room.priceHigh}</td>
        <td>{room.priceLow}</td>
      </tr>
    </tbody>
      </table>
    );
  };
  export default Table;