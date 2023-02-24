import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import prices from '../db/prices.json';
import roomTypes from '../db/types.json';
import Table from './PricesTable';
import CoolLightbox from './Gallery';



const Room = () => {
  const [roomImage, updateImage] = useState('');
  const [openedLightBox, updateLightBox] = useState(false);

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

  useEffect(() => {
    if(roomImage) updateLightBox(true);
  }, [roomImage]);

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

      <ul className={app.list}>
            {images.map(roomImg => (
              <li  key={roomImg}>
                <div >
                  <img
                    className={app.roomImg}
                    onClick={()=>updateImage(roomImg)}
                    src={`../../${roomImg}`}
                    width="320"
                    height="240"
                    alt={room.title}
                  ></img>
                </div>
              </li>
            ))}
      </ul>
    
    {openedLightBox ? <CoolLightbox links={images} currentImage={roomImage} updateLightBox= {updateLightBox}/> : ''}
    </div>
  );
};
export default Room;
