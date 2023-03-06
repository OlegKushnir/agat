import { useState } from 'react';
import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import prices from '../db/prices.json';
import roomTypes from '../db/types.json';
import fillingArr from '../db/filling.json';
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
    images
  } = room;
  const roomTable = {
    [type]: [{ id, title, persons, priceLow, priceMiddle, priceHigh }],
  };
  const { descr } = roomTypes.find(el => el.type === room.type);

  const fillingFull = filling.map(id => {
    return fillingArr.find(el => el.id === id);
  });

  const handleClick = roomImg => {
    updateImage(roomImg);
    updateLightBox(!openedLightBox);
  };

  return (
    <div className={app.wrapper}>
      <div className={css.thumb}>
        <Table roomType={type} rooms={roomTable} />
      </div>
      <div className={css.thumb}>
        <p className={app.text}>{descr}</p>
      </div>

      <p className={app.title}> Комплектація номера:</p>
      <div className={css.thumb}>
        <ul className={app.filling}>
          {fillingFull.map(({ id, title, iconURL }) => (
            <li key={id} className={app.filling__item}>
              <svg className={app.icon} width="20" height="20">
                <use href={`../${iconURL}`}></use>
              </svg>
              {title}
            </li>
          ))}
        </ul>
      </div>

      <ul className={app.list}>
        {images?.map(roomImg => (
          <li key={roomImg} className={app.gal__item}>
              <img
                className={app.roomImg}
                onClick={() => handleClick(roomImg)}
                src={`../../${roomImg?.split('.')[0]}_480.jpg`}
                width="300"
                height="220"
                alt={room.title}
              ></img>
          </li>
        ))}
      </ul>

      {openedLightBox ? (
        <CoolLightbox
          links={images}
          currentImage={roomImage}
          handleClick={handleClick}
        />
      ) : (
        ''
      )}
    </div>
  );
};
export default Room;
