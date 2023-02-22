import app from './App.module.css';

const Map = () => {

    return (
      <section >
        {/* <h1 className={app.title}>б.в. Енергетик</h1> */}
        <iframe
          className={app.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.9273150320287!2d31.17733991550444!3d46.6281980630412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c66adf95ed7f39%3A0x9e5b87c21e66c3b8!2z0JXQvdC10YDQs9C10YLQuNC6!5e0!3m2!1suk!2s!4v1676645330052!5m2!1suk!2s"
          title="googleMap"
          loading="lazy"
        ></iframe>
      </section>

    );
  };
  export default Map;