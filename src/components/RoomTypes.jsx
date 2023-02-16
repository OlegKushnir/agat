import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import roomTypes from '../db/types.json';

const RoomTypes = () => {
  // const roomImg = im => {
  //   const found = roomTypes.find(element => element.type === im);
  //   console.log(found);
  //   if (!found || found.images.length === 0) return 'beach.png'
  //   return found.images[0];
  // };
  // const roomTypes = db.reduce((acc, room) => {
  //         if (!acc.includes(room.type)) {
  //           acc.push(room.type);
  //           return acc;
  //         }
  //         return acc;
  //       }, [])
 
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {roomTypes.map(({ id, type, descr, images }) => (
          
          <li key={id} className={css.item}>
            <NavLink to={type} className={css.navLink}>
              <div className={css.wrapper}>
                <img src={images[0]} width="320px" height= "240px" alt={type}></img>
              </div>
              <div className={css.infoWrapper}>
                <p>{type}</p>
                <p>{descr}</p>
              </div>
            </NavLink>
          </li>
        ))}
         {
         
      }
      </ul>
    </div>
  );
};
export default RoomTypes;
