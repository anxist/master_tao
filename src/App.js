import './index.css';
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from './image/logo.svg'
import Carusel from "./components/Carusel";
import UserForm from "./components/UserForm";
import man from './image/man.png';
import ph4 from "./image/ph4.png";


function PhotoMan({ src, alt }) {
    return (
        <img
            className="d-block absolute-img-man"
            width={625}
            height={917}
            src={man}
            alt={man}
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
                      <h2>Получить рассчет стоимости доставки вашего груза</h2>
                  </div>
                 <div className="form_flex">
                     <UserForm/>
                     <PhotoMan/>
                 </div>
              </div>
          </div>

      </div>
    </div>

  );
}

export default App;
