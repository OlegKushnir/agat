import { useState } from 'react';
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

  const fillingIcon = str => {
    switch (str) {
      case 'двоспальне ліжко':
        return (
          "../../icons.svg#bed3"
        );
      case 'диван':
        return (
          "../../icons.svg#sofa"
        );

      case 'душ':
        return (
          "../../icons.svg#bath"
        );

      case 'туалет':
        return (
          "../../icons.svg#toilet"
        );

      case 'кондиціонер':
        return (
          "../../icons.svg#ac"
        );

      case 'WiFi':
        return (
          "../../icons.svg#wifi"
        );

      case 'телевізор':
        return (
          "../../icons.svg#tv"
        );
      case 'холодильник':
        return (
          "../../icons.svg#fridge"
        );

      default:
        break;
    }
  };

  const handleClick = roomImg => {
    updateImage(roomImg);
    updateLightBox(!openedLightBox);
  };

  return (
    <div className={app.wrapper}>
      <div className={css.thumb}>
        <Table roomType={type} rooms={roomTable} />
      </div>
      <ul className={app.filling}>
        {filling.map(el => (
          <>
            {fillingIcon(el) ? (
              <li key={el} className={app.filling__item}>
                <svg className={app.icon} width="27" height="27">
                  <use href={fillingIcon(el)}></use>
                </svg>
                 {el}
              </li>
            ) : (
              ''
            )}
          </>
        ))}
      </ul>

      <ul className={app.list}>
        {images.map(roomImg => (
          <li key={roomImg}>
            <div>
              <img
                className={app.roomImg}
                onClick={() => handleClick(roomImg)}
                src={`../../${roomImg}`}
                width="320"
                height="240"
                alt={room.title}
              ></img>
            </div>
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
