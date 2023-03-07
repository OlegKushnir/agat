import app from '../App.module.css';
import css from './Prices.module.css';
import prices from '../../db/prices.json';
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
    <div className={app.wrapper}>
      <p className={app.text}>
        Вартість прибування залежить від дат поселення. Ціна вказана за номер за
        ніч при поселенні на період від трьох ночей. Вказана максимальна
        кількість осіб для розташування.
        <span className={css.textImp}>
          Поселення в номер після 13:00 / Виселення з номера до 10:00
        </span>
        Бронювання здійснюється за передплатою (30% від загальної вартості).
        Бронювання дійсне після надходження передплати. Для отримання додаткової
        інформації та фото оберіть (натисніть) бажаний тип номера. Клієнтам
        надається безкоштовна парковка!
      </p>
      <span className={css.textImp}></span>
      <p>
        <span className={css.current}>xxx</span> - актуальна ціна на поточну
        добу
      </p>
      
        {Object.keys(roomTypes).map(rType => (
          <div className={app.wrapper}>
          <Table key={rType} roomType={rType} rooms={roomTypes} />
          </div>
        ))}
      
    </div>
  );
};
export default Prices;
