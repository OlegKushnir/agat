import app from './App.module.css';
import roomTypes from '../db/types.json';
import RoomItem from './RoomItem';

const RoomTypes = () => {
  return (
    <div className={app.wrapper}>
      <ul className={app.list}>
        {roomTypes.map(({ id, type, descr, images }) => (
          <RoomItem
            key={id}
            id={id}
            type={type}
            descr={descr}
            images={images}
          />
        ))}
      </ul>
    </div>
  );
};
export default RoomTypes;
