import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import db from '../db/prices.json';
import roomGal from '../db/gallery.json';
import seasonDAtes from '../db/seasonDates.json';

const Rooms = () => {
  const roomImg = im => {
    const found = roomGal.find(element => element.type === im);
    console.log(found);
    if (!found || found.images.length === 0) return 'beach.png'
    return found.images[0];
  };
  const roomTypes = db.reduce((acc, room) => {
          if (!acc.includes(room.type)) {
            acc.push(room.type);
            return acc;
          }
          return acc;
        }, [])
  console.log(roomTypes);
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {roomGal.map(({ id, type, descr }) => (
          
          <li key={id} className={css.item}>
            <NavLink to="#" className={css.navLink}>
              <div className={css.wrapper}>
                <img src={roomImg(type)} width="320px" height= "240px" alt={type}></img>
              </div>
              <div className={css.infoWrapper}>
                <p>{type}</p>
                <p>{descr}</p>
                {/* <ul className={css.info}>
                  <li>{seasonDAtes.priceLowBefore} : {priceLow} грн</li>
                  <li>{seasonDAtes.priceMiddle} : {priceMiddle} грн</li>
                  <li>{seasonDAtes.priceHigh} : {priceHigh} грн</li>
                  <li>{seasonDAtes.priceLowAfter} : {priceLow} грн</li>
                </ul> */}
              </div>
            </NavLink>
          </li>
        ))}
        {/* {db.reduce((acc, room) => {
          if (acc.includes(room.type)) {
            acc.push(room.type);
            return acc;
          }
          return [...acc];
        }, [])} */}
         {
         
      }
      </ul>
    </div>
  );
};
export default Rooms;
