import css from './Prices.module.css';
import prices from '../db/prices.json';
import dates from '../db/seasonDates.json';
// import { NavLink } from 'react-router-dom';
import Table from './PricesTable';

const { priceLowBefore, priceLowAfter, priceMiddle, priceHigh } = dates;
const roomTypes = prices.reduce((acc, room) => {
  const { type, title, persons, priceLow, priceMiddle, priceHigh } = room;
  if (Object.keys(acc).includes(room.type)) {
    acc[type].push({ title, persons, priceLow, priceMiddle, priceHigh });

    return acc;
  }

  return {
    ...acc,
    [type]: [{ title, persons, priceLow, priceMiddle, priceHigh }],
  };
}, {});
// const getPrices = roomType => {
//   roomType.map(room => (
//     <tbody key={room.id}>
//       <tr className={css.type}>
//         <td>{room.type}</td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//       </tr>
//       <tr>
//         <td>
//           <NavLink to="#" className={css.link}>
//             {room.title} {room.persons}-х місний
//           </NavLink>
//         </td>
//         <td>{room.priceLow}</td>
//         <td>{room.priceMiddle}</td>
//         <td>{room.priceHigh}</td>
//         <td>{room.priceLow}</td>
//       </tr>
//     </tbody>
//   ));
// };

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

      {Object.keys(roomTypes).map(rType => (
        // console.log(roomTypes[rType])
        roomTypes[rType].map(room => {
          // console.log(room);
          <Table room={room} />
        })
        
      ))}
    </div>
  );
};
export default Prices;
