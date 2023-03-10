import RoomTypes from '../Rooms/RoomTypes';
import Map from '../Map/Map';
import app from '../App.module.css';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <div className={app.hero} aria-label="hero">
        <h2
          className={
            !inView ? app.hero__title : `${app.hero__title} ${app.show}`
          }
          ref={ref}
        >
          Hotel<span className={app.hero__sublogo}>the best</span>
        </h2>
      </div>
      <div className={app.container}>
        <RoomTypes />
        <Map />
      </div>
    </>
  );
};
export default Home;
