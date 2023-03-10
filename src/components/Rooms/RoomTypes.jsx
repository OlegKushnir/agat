import app from '../App.module.css';
import roomTypes from '../../db/types.json';
import RoomType from './RoomType.jsx';

const RoomTypes = () => {
  const shortDescr = (descr)=>{
    const res = descr.split('.')
    return `${res[0]}.`
  }
  return (
    <section className={app.wrapper}>
      <h2 className={app.section__title}>Our rooms</h2>
      <div className={app.wrapper}>
      <ul className={app.list}>
        {roomTypes.map(({ id, type, descr, image }) => (
          <RoomType
            key={id}
            type={type}
            descr={shortDescr(descr)}
            image={image}
          />
        ))}
      </ul>
      </div>
      
    </section>
  );
};
export default RoomTypes;
