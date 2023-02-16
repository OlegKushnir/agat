import { useParams } from 'react-router-dom';
import css from './Room.module.css';
// import { NavLink } from 'react-router-dom';
import prices from '../db/prices.json';
// import seasonDAtes from '../db/seasonDates.json';
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
    <div className={css.container}>
      <Table roomType={type} rooms={roomTable} />
      <p>Комплектація номера:</p>
      <ul>
        {filling.map(el => (
          <li key={el}>- {el}</li>
        ))}
      </ul>
      {images.map(roomImg => (
        <div key={roomImg} className={css.wrapper}>
          <img
            src={`../../${roomImg}`}
            width="320px"
            height="240px"
            alt={room.title}
          ></img>
        </div>
      ))}
    </div>
  );
};
export default Room;
