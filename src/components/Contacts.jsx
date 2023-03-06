import app from './App.module.css';
import { NavLink } from 'react-router-dom';

const Contacts = () => {
  return (
    <>
      <section>
        <div className={app.contacts__wrapper}>
          <ul className={app.contacts}>
            <li className={app.contacts__item}>
              <NavLink to="/map" className={app.contacts__link}>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#map"></use>
                </svg>
              </NavLink>
              <div>
                <h2 className={app.title}>Місцезнаходження</h2>
                <p className={app.text}>
                  55км дороги Одеса-Мелітополь-Новоазовськ, 10
                </p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <span className={app.contacts__link}>
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#clock"></use>
                </svg>
              </span>
              <div>
                <h2 className={app.title}>Часи роботи</h2>
                <p className={app.text}>Понеділок - П'ятниця: 09:00 - 18:00</p>
                <p className={app.text}>Суббота: 10:00 - 14:00</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <a
                href="mailto:agat.turism@gmail.com"
                className={app.contacts__link}
                title="email"
              >
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#envelope"></use>
                </svg>
              </a>
              <div>
                <h2 className={app.title}>Написати нам</h2>
                <p className={app.text}>agat.turism@gmail.com</p>
              </div>
            </li>
            <li className={app.contacts__item}>
              <a
                href="tel:+380682840591"
                className={app.contacts__link}
                title="phone"
              >
                <svg className="icon" width="30" height="30">
                  <use href="icons.svg#phone-form"></use>
                </svg>
              </a>
              <div>
                <h2 className={app.title}>Забронювати номер</h2>
                <p className={app.text}>(+38) 068 284 05 91</p>
              </div>
            </li>
          </ul>
          <div className={app.contacts}>
            <article className={app.text}>
              <p >
                База відпочинку "Енергетик" знаходиться на узбережжі Чорного
                моря в курортній зоні Коблеве на кордоні Одеської та
                Миколаївської областей. Розташована в першій ліннії від моря, має
                свій вихід на пляж.
              </p>
              <p>
                Бронювання номерів відбувається за передплатою (30% від
                загальної вартості). Бронювання дійсне після надходження
                передплати. 
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contacts;
