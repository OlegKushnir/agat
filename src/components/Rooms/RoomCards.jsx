import { useParams } from 'react-router-dom';
import app from '../App.module.css';
import prices from '../../db/prices.json';
import RoomCard from './RoomCard';

const RoomCards = () => {
  const { roomType } = useParams();
  const rooms = prices.filter(room => room.type === roomType);

  return (
    <section className={app.wrapper}>
      <h2 className={app.section__title}>{roomType}</h2>
      <div className={app.wrapper}>
        <ul className={app.list}>
          {rooms.map(
            ({
              id,
              title,
              persons,
              priceLow,
              priceMiddle,
              priceHigh,
              filling,
              images,
            }) => (
              <RoomCard
                key={id}
                id={id}
                title={title}
                persons={persons}
                priceLow={priceLow}
                priceMiddle={priceMiddle}
                priceHigh={priceHigh}
                filling={filling}
                images={images}
              />
            )
          )}
        </ul>
      </div>
    </section>
  );
};
export default RoomCards;
