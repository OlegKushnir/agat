import css from './Prices.module.css';
import prices from '../db/prices.json';
import Table from './PricesTable';

const roomTypes = prices.reduce((acc, room) => {
  const { id, type, title, persons, priceLow, priceMiddle, priceHigh } = room;
  if (Object.keys(acc).includes(room.type)) {
    acc[type].push({ id, title, persons, priceLow, priceMiddle, priceHigh });

    return acc;
  }

  return {
    ...acc,
    [type]: [{ id, title, persons, priceLow, priceMiddle, priceHigh }],
  };
}, {});

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
         <Table key={rType} roomType={rType} rooms={roomTypes} />
      ))}
    </div>
  );
};
export default Prices;
