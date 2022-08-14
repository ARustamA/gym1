import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <div className={style.containerMain}>
      
        <div className={style.header}>
          <a href='#' className={style.logo}></a>
          {/* <img src={logo} width={230} height={106} alt="logo" className={style.logo} /> */}
          <ul id="menu">
            <li className={style.active}>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#gallery">Галерея</a>
            </li>
            <li>
              <a href="#subscription">Абонементы</a>
            </li>
            <li>
              <a href="#instructor">Тренеры</a>
            </li>
            <li>
              <a href="#information">Контакты</a>
            </li>
          </ul>
          <a href="tel:+74964161916" className={style.phone}>+7 (496) 416-19-16 </a>
          </div>
          <div className={style.content1}></div>
          <div className={style.content2}></div>
        <div className={style.title}>
          <h1>Фитнес клуб Пантеон</h1>
          <p>Лучше нас только боги</p>
          <button className={style.titleButton}>
          </button>
          
        </div>
      </div>

        
          <div className={style.content3}></div>
          <div className={style.content4}></div>
          <div className={style.content5}></div>

      <div id='about'>
        <div className={style.container}>
          <h2>О нас</h2>
        </div>
      </div>
      <div id='gallery'>
        <div className={style.container}>
          <h2>Галерея</h2>
        </div>
      </div>
      <div id='subscription'>
        <div className={style.container}>
          Абонементы
        </div>
      </div>
      <div id='instructor'>
        <div className={style.container}>
          Тренеры
        </div>
      </div>
      <div id='information'>
        <div className={style.container}>
          Контакты
        </div>
      </div>
      <a href='#' className={style.arroyUp}>
        <svg

          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z"
            fill="#F7931E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z"
            fill="#F7931E"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;
