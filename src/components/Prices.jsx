import css from './Prices.module.css';
import prices from '../db/prices.json';
import dates from '../db/seasonDates.json';
import { NavLink } from 'react-router-dom';

const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;

const Prices = () => {
  return (
    <div className={css.container}>
      <div className={css.text}>
        Ціни вказані в гривнях за номер за ніч при заселенні на період від трьох
        ночей. Клієнтам надається безкоштовна парковка! Заїзд в номер після
        13:00 Виїзд з номера до 10:00 Бронювання здійснюється за передоплатою
        (30% від загальної вартості). Бронювання дійсне після надходження
        передоплати. Натисніть на тип номера для виведення додаткової інформації
        та фото.
      </div>
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

        {prices.map(
          ({ id, title, type, persons, priceLow, priceMiddle, priceHigh }) => (
            <tbody key={id}>
              <tr className={css.type}>
                <td>{type}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <NavLink to="#" className={css.link}>
                    {title} {persons}-х місний
                  </NavLink>
                </td>
                <td>{priceLow}</td>
                <td>{priceMiddle}</td>
                <td>{priceHigh}</td>
                <td>{priceLow}</td>
              </tr>
            </tbody>
          )
        )}
      </table>
    </div>
  );
};
export default Prices;
