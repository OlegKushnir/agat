import app from './App.module.css';
import roomTypes from '../db/types.json';
import RoomItem from './RoomItem';

const RoomTypes = () => {
  const shortDescr = (descr)=>{
    const res = descr.split('.')
    return `${res[0]}...`
  }
  return (
    <section className={app.wrapper}>
      <h2 className={app.section__title}>Наші номери</h2>
      <div className={app.wrapper}>
      <ul className={app.list}>
        {roomTypes.map(({ id, type, descr, image }) => (
          <RoomItem
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