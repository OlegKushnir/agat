import app from './App.module.css';
import roomTypes from '../db/types.json';
import RoomItem from './RoomItem';

const RoomTypes = () => {
  const shortDescr = (descr)=>{
    const res = descr.split('.')
    return `${res[0]}...`
  }
  return (
    <div className={app.wrapper}>
      <ul className={app.list}>
        {roomTypes.map(({ id, type, descr, images }) => (
          <RoomItem
            key={id}
            id={id}
            type={type}
            descr={shortDescr(descr)}
            images={images}
          />
        ))}
      </ul>
    </div>
  );
};
export default RoomTypes;
