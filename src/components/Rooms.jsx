import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import prices from '../db/prices.json';
import seasonDAtes from '../db/seasonDates.json';
import roomTypes from '../db/types.json';

const Rooms = () => {
  const { roomType } = useParams();
  const rooms = prices.filter(room => room.type === roomType);
  const { images } = roomTypes.find(room => room.type === roomType);
  const fillingIcon = str => {
    switch (str) {
      case 'двоспальне ліжко':
        return '../icons.svg#bed3';
      case 'диван':
        return '../icons.svg#sofa';

      case 'душ':
        return '../icons.svg#bath';

      case 'туалет':
        return '../icons.svg#toilet';

      case 'кондиціонер':
        return '../icons.svg#ac';

      case 'WiFi':
        return '../icons.svg#wifi';

      case 'телевізор':
        return '../icons.svg#tv';
      case 'холодильник':
        return '../icons.svg#fridge';

      default:
        break;
    }
  };

  return (
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
          }) => (
            <li key={id} className={`${app.item} ${app.show}`}>
              <NavLink to={id} className={css.navLink}>
                <div className={app.imgWrapper}>
                  <img
                    className={app.roomImg}
                    src={`../${images[0]}`}
                    width="320"
                    height="240"
                    alt={title}
                  ></img>
                </div>
                <div className={app.infoWrapper}>
                  <h3 className={app.title}>
                    {title}
                    <span className={app.thinText}> {persons}-х містний</span>
                  </h3>
                  <ul className={css.prices}>
                    <li className={app.text}>
                      {seasonDAtes.priceLowBefore} : {priceLow} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceMiddle} : {priceMiddle} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceHigh} : {priceHigh} грн
                    </li>
                    <li className={app.text}>
                      {seasonDAtes.priceLowAfter} : {priceLow} грн
                    </li>
                  </ul>
                  <ul className={app.filling}>
                    {filling.map(el => (
                      <>
                        {fillingIcon(el) ? (
                          <li key={el} className={app.filling__item}>
                            <svg className={app.icon} width="27" height="27">
                              <use href={fillingIcon(el)}></use>
                            </svg>
                          </li>
                        ) : (
                          ''
                        )}
                      </>
                    ))}
                  </ul>
                </div>
              </NavLink>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default Rooms;
