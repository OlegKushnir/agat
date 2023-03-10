import css from './Footer.module.css';
import app from '../App.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={app.container}>
        <div className={css.wrapper}>
          <ul className={css.contactsList}>
            <li className={css.logoItem}>
              <span className={app.logo}>Hotel</span>
            </li>

            <li className={css.item}>
              <h3 className={css.booking}>Contacts:</h3>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="tel:+381111111111">
                (+38) 111 111 11 11
              </a>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="tel:+382222222222">
                (+38) 222 222 22 22
              </a>
            </li>
            <li className={css.item}>
              <a className={css.contacts} href="mailto:email@gmail.com">
                email@gmail.com
              </a>
            </li>
            <li>
              <ul className={css.social}>
                <li className={css.social__item}>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="instagram"
                  >
                    <svg className="icon" width="20" height="20">
                      <use href="icons.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className={css.social__item}>
                  <a
                    href="telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="telegram"
                  >
                    <svg className="icon" width="25" height="25">
                      <use href="icons.svg#telegram"></use>
                    </svg>
                  </a>
                </li>
                <li className={css.social__item}>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="WhatsApp"
                  >
                    <svg className="icon" width="30" height="30">
                      <use href="icons.svg#whatsapp"></use>
                    </svg>
                  </a>
                </li>
                <li className={css.social__item}>
                  <a
                    href="https://www.viber.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.social__link}
                    title="Viber"
                  >
                    <svg className="icon" width="27" height="27">
                      <use href="icons.svg#viber"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <iframe
            className={app.location}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007220.739102379!2d27.28874321123379!3d49.175885164068106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6318a0b864c43%3A0x129f8fe28cf2176c!2z0J7QtNC10YHQsCwg0J7QtNC10YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCwLCA2NTAwMA!5e0!3m2!1suk!2s!4v1678446505875!5m2!1suk!2s"
            title="googleMap"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className={css.copiright}>
        <p> Developed by </p>
        <p>Oleg Kushnir &#169;</p>
      </div>
    </footer>
  );
};
export default Footer;
