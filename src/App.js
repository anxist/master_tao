import './index.css';
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from './image/logo.svg'
import Carusel from "./components/Carusel";
import UserForm from "./components/UserForm";
import man from './image/man.png';
import whuUsBlock1 from './image/Frame 7.png'
import whuUsBlock2 from './image/Frame 6.png'
import whuUsBlock3 from './image/Frame 5.png'
import whuUsBlock4 from './image/Frame 4.png'
import whuUsBlock5 from './image/Frame 3.png'
import whuUsBlock6 from './image/Frame 2.png'
import whuUsBlock7 from './image/Frame 1.png'
import whuUsBlock8 from './image/Frame 8.png'

function PhotoMan({ src, alt }) {
    return (
        <img
            className="d-block absolute-img-man"
            width={625}
            height={917}
            src={man}
            alt={alt}
        />
    );
}

function WhyUsBlock1({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock1}
            alt={alt}
        />
    );
}

function WhyUsBlock2({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock2}
            alt={alt}
        />
    );
}

function WhyUsBlock3({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock3}
            alt={alt}
        />
    );
}

function WhyUsBlock4({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock4}
            alt={alt}
        />
    );
}

function WhyUsBlock5({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock5}
            alt={alt}
        />
    );
}

function WhyUsBlock6({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock6}
            alt={alt}
        />
    );
}

function WhyUsBlock7({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock7}
            alt={alt}
        />
    );
}

function WhyUsBlock8({ src, alt }) {
    return (
        <img
            className="d-block UsBlockImg"
            width={113}
            height={113}
            src={whuUsBlock8}
            alt={alt}
        />
    );
}

function App() {
  return (
    <div className="container">
      <div className="container_special">
          <div className="container_flex">
              <header>
                  <Logo></Logo>
                  <div className="links">
                      <p>Цены и сроки</p>
                      <p>Услуги</p>
                      <p>О компании</p>
                      <p>Контакты</p>
                      <p>Оформить груз</p>
                  </div>
                  <button className='callBtn' type='button'>Оставить заявку</button>
              </header>
          </div>
          <div className='promo'>
              <Carusel/>
          </div>
          <div className="container_flex">
              <div className="form_main_container">
                  <div className="form_title">
                      <p className="calculation">Получить рассчет стоимости доставки вашего груза</p>
                  </div>
                 <div className="form_flex">
                     <UserForm/>
                     <PhotoMan/>
                 </div>
              </div>
          </div>
          <div className="why_us">
                <div className="container_flex">
                    <p>Почему стоит выбрать именно нас?</p>
                </div>
              <div className="why_us_blocks">
                  <div className="why_us_block">
                      <WhyUsBlock1/>
                      <p>Таможенное оформление груза</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock8/>
                      <p>Страховка груза</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock2/>
                      <p>Проверка товара на брак</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock3/>
                      <p>Доставка в любой город РФ</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock4/>
                      <p>Консолидация на складе</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock5/>
                      <p>Ответственное хранение груза</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock6/>
                      <p>Помощь в оплате товара</p>
                  </div>
                  <div className="why_us_block">
                      <WhyUsBlock7/>
                      <p>Упаковка, переупаковка, паллетирование груза к международной перевозке</p>
                  </div>
              </div>
          </div>

      </div>
    </div>

  );
}

export default App;
