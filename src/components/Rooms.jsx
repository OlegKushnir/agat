import { useParams} from 'react-router-dom';
import css from './Rooms.module.css';
import { NavLink } from 'react-router-dom';
import prices from '../db/prices.json';
import seasonDAtes from '../db/seasonDates.json';
import roomTypes from '../db/types.json';


const Rooms = () => {
    const { roomType } = useParams();
    const rooms = prices.filter(room => room.type === roomType)
    const {images} = roomTypes.find(room => room.type === roomType)

    return (
        <div className={css.container}>
        <ul className={css.list}>
          {rooms.map(({ id, title, persons, priceLow, priceMiddle, priceHigh}) => (
            
            <li key={id} className={css.item}>
              <NavLink to={id} className={css.navLink}>
                <div className={css.wrapper}>
                  <img src={`../${images[0]}`} width="320px" height= "240px" alt={title}></img>
                </div>
                <div className={css.infoWrapper}>
                  <p className={css.title} >{title} <span className={css.persons}>{persons}-х містний</span> </p>
                  <ul className={css.info}>
                    <li className={css.text}>{seasonDAtes.priceLowBefore} : {priceLow} грн</li>
                    <li className={css.text}>{seasonDAtes.priceMiddle} : {priceMiddle} грн</li>
                    <li className={css.text}>{seasonDAtes.priceHigh} : {priceHigh} грн</li>
                    <li className={css.text}>{seasonDAtes.priceLowAfter} : {priceLow} грн</li>
                  </ul>
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
  export default Rooms;