import RoomTypes from './RoomTypes';
import Map from './Map';
import app from './App.module.css';

const Home = () => {
  return (  
    <>
      <section className={app.hero}>
        <h1 className={app.hero__title}>б.в. Енергетик</h1>
      </section>
      <div className={app.container}>
      <RoomTypes />
      <Map />
      </div>
      
    </>
  );
};
export default Home;
