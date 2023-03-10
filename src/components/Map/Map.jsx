import app from '../App.module.css';

const Map = () => {
  return (
    <section className={app.wrapper}>
      <h2 className={app.section__title}>Our location</h2>
      <div className={app.wrapper}>
      <iframe
          className={app.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007220.739102379!2d27.28874321123379!3d49.175885164068106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHQsCwg0J7QtNC10YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA2NTAwMA!5e0!3m2!1suk!2s!4v1678446505875!5m2!1suk!2s"
          title="googleMap"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
export default Map;
