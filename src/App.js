import './index.css';
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from './image/logo.svg'
import Carusel from "./components/Carusel";

function App() {
  return (
    <div className="container">
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
          <div className='promo'>
              <Carusel/>
          </div>
      </div>
    </div>

  );
}

export default App;
