import RoomTypes from './RoomTypes';
import Map from './Map';
import app from './App.module.css';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <>
      <section className={app.hero}>
        <h2
          className={
            !inView ? app.hero__title : `${app.hero__title} ${app.show}`
          }
          ref={ref}
        >
          Енергетик<span className={app.hero__sublogo}>база відпочинку</span>
        </h2>
      </section>
      <div className={app.container}>
        <RoomTypes />
        <Map />
      </div>
    </>
  );
};
export default Home;
