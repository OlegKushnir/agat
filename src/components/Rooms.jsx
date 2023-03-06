import { useParams } from 'react-router-dom';
import app from './App.module.css';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import prices from '../db/prices.json';
import seasonDAtes from '../db/seasonDates.json';
import fillingArr from '../db/filling.json';

const Rooms = () => {
  const { roomType } = useParams();
  const rooms = prices.filter(room => room.type === roomType);

  const fillingIcon = id => {
    const res = fillingArr.find(el => el.id === id);
    return res?.iconURL;
  };

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
              <li key={id} className={`${app.item} ${app.show}`}>
                <NavLink to={id} className={css.navLink}>
                  <div className={app.imgWrapper}>
                    <img
                      className={app.roomImg}
                      src={
                        images?.length
                          ? `../${images[0].split('.')[0]}_480.jpg`
                          : ''
                      }
                      width="320"
                      height="240"
                      alt={title}
                    ></img>
                  </div>
                  <div className={app.infoWrapper}>
                    <h3 className={app.title}>
                      {title}
                      <p className={app.thinText}> {persons} - містний</p>
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
                        <li key={el} className={app.filling__item}>
                          <svg className={app.icon} width="27" height="27">
                            <use href={fillingIcon(el)}></use>
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
export default Rooms;
