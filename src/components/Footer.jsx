 import css from './Footer.module.css';
 import app from './App.module.css';


const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={app.container}>
      <div className={css.wrapper}>
        <ul className={css.contactsList}>
          <li className={css.logoItem}>
            <span className={app.logo}>Енергетик</span>
          </li>

          <li className={css.item}>
            <h3 className={css.booking}>
              Бронювання номерів, додаткова інформація:
            </h3>
          </li>
          <li className={css.item}>
            <a className={css.contacts} href="tel:+380682840591">
              (+38) 068 284 05 91
            </a>
          </li>
          <li className={css.item}>
            <a className={css.contacts} href="tel:+380677085568">
              (+38) 067 708 55 68
            </a>
          </li>
          <li className={css.item}>
            <a className={css.contacts} href="mailto:agat.turism@gmail.com">
              agat.turism@gmail.com
            </a>
          </li>
          <li>
            <ul className={css.social}>
              <li className={css.social__item}>
                <a
                  href="https://www.instagram.com/energetik_koblevo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.social__link}
                  title="instagram"
                >
                  <svg className="icon" width="20" height="20">
                    <use href="../icons.svg#instagram"></use>
                  </svg>
                </a>
              </li>
              <li className={css.social__item}>
                <a
                  href="tg://resolve?domain=Oleg_En"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.social__link}
                  title="telegram"
                >
                  <svg className="icon" width="25" height="25">
                    <use href="../icons.svg#telegram"></use>
                  </svg>
                </a>
              </li>
              <li className={css.social__item}>
                <a
                  href="whatsapp://send?phone=+380682840591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.social__link}
                  title="WhatsApp"
                >
                  <svg className="icon" width="30" height="30">
                    <use href="../icons.svg#whatsapp"></use>
                  </svg>
                </a>
              </li>
              <li className={css.social__item}>
                <a
                  href="viber://add?number=380682840591"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={css.social__link}
                  title="Viber"
                >
                  <svg className="icon" width="27" height="27">
                    <use href="../icons.svg#viber"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <iframe
          className={app.location}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.9273150320287!2d31.17733991550444!3d46.6281980630412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c66adf95ed7f39%3A0x9e5b87c21e66c3b8!2z0JXQvdC10YDQs9C10YLQuNC6!5e0!3m2!1suk!2s!4v1676645330052!5m2!1suk!2s"
          title="googleMap"
          loading="lazy"
        ></iframe>
        </div>
      </div>
      <div className={css.copiright}>
        <p> ТОВ "АГАТ" База відпочинку "Енергетик"</p>
        <p>Всі права захищені. &#169;</p>
      </div>
    </footer>
  );
};
export default Footer;
