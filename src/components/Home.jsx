import RoomTypes from './RoomTypes';
import Map from './Map';
import css from './App.module.css';

const Home = () => {
  return (
    <>
      <section className={css.hero}>
        <h1 className={css.logo}>б.в. Енергетик</h1>
      </section>
      <RoomTypes />
      <Map />
    </>
  );
};
export default Home;
