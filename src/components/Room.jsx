import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import prices from '../db/prices.json';
import roomTypes from '../db/types.json';
import Table from './PricesTable';

const Room = () => {
  const { roomId } = useParams();
  const room = prices.find(room => room.id === roomId);
  const {
    type,
    id,
    title,
    persons,
    priceLow,
    priceMiddle,
    priceHigh,
    filling,
  } = room;
  const roomTable = {
    [type]: [{ id, title, persons, priceLow, priceMiddle, priceHigh }],
  };
  const { images } = roomTypes.find(el => el.type === room.type);

  return (
    <div className={app.wrapper}>
      <div className={css.thumb}>
        <Table roomType={type} rooms={roomTable} />
      </div>
      <p className={app.title}> Комплектація номера:</p>
      <ul className={app.filling}>
        {filling.map(el => (
          <li className={app.text} key={el}>
            - {el}
          </li>
        ))}
      </ul>
      <ul className={css.list}>
        {images.map(roomImg => (
          <li key={roomImg}>
            <div className={app.imgWrapper}>
              <img
                src={`../../${roomImg}`}
                width="320px"
                height="240px"
                alt={room.title}
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Room;
