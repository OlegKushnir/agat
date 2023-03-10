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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad soluta ab,
        itaque error inventore adipisci omnis ea rem expedita repellendus? Animi
        itaque blanditiis, incidunt sunt accusamus iure? Temporibus, minus
        obcaecati?
        <span className={css.textImp}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam
          adipisci minus, autem, consectetur ipsa nihil ab vitae laudantium
          quasi aliquid aspernatur animi rerum, nobis ut ducimus a provident
          commodi.
        </span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aut
        iusto ab recusandae sed error repellat voluptatem cumque voluptatibus,
        repellendus, harum accusantium incidunt minus adipisci qui ipsam sequi
        quia minima.
      </p>
      <span className={css.textImp}></span>
      <p>
        <span className={css.current}>xxx</span> - price for today
      </p>

      {Object.keys(roomTypes).map(rType => (
        <div key={rType} className={app.wrapper}>
          <Table roomType={rType} rooms={roomTypes} />
        </div>
      ))}
    </div>
  );
};
export default Prices;
