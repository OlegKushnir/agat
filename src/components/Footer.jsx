import css from './Footer.module.css';

const Footer = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <ul >
          <li>
            <h3 className={css.booking}>Бронювання номерів, додаткова інформація:</h3>
          </li>
          <li>
            <a className={css.contacts} href="tel:+380682840591">(+38) 068 284 05 91</a>
          </li>
          <li>
            <a className={css.contacts} href="mailto:agat.turism@gmail.com">agat.turism@gmail.com</a>
          </li>
        </ul>

        <ul class={css.social}>
          <li class={css.social__item}>
            <a href="/rooms" class={css.social__link} title="">
              <svg class="icon" width="20" height="20">
                <use href="icons.svg#instagram"></use>
              </svg>
            </a>
          </li>
          <li class={css.social__item}>
            <a href="/rooms" class={css.social__link} title="">
              <svg class="icon" width="25" height="25">
                <use href="icons.svg#telegram"></use>
              </svg>
            </a>
          </li>
          <li class={css.social__item}>
            <a href="/rooms" class={css.social__link} title="">
              <svg class="icon" width="30" height="30">
                <use href="icons.svg#whatsapp"></use>
              </svg>
            </a>
          </li>
          <li class={css.social__item}>
            <a href="/rooms" class={css.social__link} title="">
              <svg class="icon" width="27" height="27">
                <use href="icons.svg#viber"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div class={css.copiright}>
        <p> ТОВ "АГАТ" База відпочинку "Енергетик"</p>
        <p>Всі права захищені. &#169;</p>
      </div>
    </div>
  );
};
export default Footer;
