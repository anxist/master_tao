import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ph1 from '../image/ph1.png';
import ph2 from '../image/ph2.png';
import ph3 from '../image/ph3.png';
import ph4 from '../image/ph4.png';


function PhotoFirst({ src, alt }) {
    return (
        <img
            className="d-block w-100"
            src={ph1}
            alt={alt}
        />
    );
}

function PhotoSecond({ src, alt }) {
    return (
        <img
            className="d-block w-100"
            src={ph2}
            alt={alt}
        />
    );
}

function PhotoThird({ src, alt }) {
    return (
        <img
            className="d-block w-100"
            src={ph3}
            alt={alt}
        />
    );
}

function PhotoFourth({ src, alt }) {
    return (
        <img
            className="d-block w-100"
            src={ph4}
            alt={alt}
        />
    );
}

function Carusel() {
    return (
        <Carousel>
            <Carousel.Item>
                <PhotoFirst text="First slide" />
                <Carousel.Caption>
                    <div className="container_flex promo_flex">
                        <div className="promo_text">
                            <h1>Прямое карго из Китая</h1>
                            <div className="promo_text_p">
                                <p>Доставляем любые грузы из Китая по честной цене</p>
                            </div>
                            <button className='promoBtn' type='button'>Рассчитать стоимость</button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <PhotoSecond text="Second slide" />
                <Carousel.Caption>
                    <div className="container_flex promo_flex">
                        <div className="promo_text">
                            <h1>Гарантируем сроки!</h1>
                            <div className="promo_text_p">
                                <p>Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%</p>
                            </div>
                            <button className='promoBtn' type='button'>Рассчитать стоимость</button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <PhotoThird text="Third slide" />
                <Carousel.Caption>
                    <div className="container_flex promo_flex">
                        <div className="promo_text">
                            <h1>Выкуп товара с ТаоБао, 1688</h1>
                            <div className="promo_text_p">
                                <p>Выкуп и доставка товаров с китайских торговых площадок.</p>
                            </div>
                            <button className='promoBtn' type='button'>Рассчитать стоимость</button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <PhotoFourth text="4" />
                <Carousel.Caption>
                    <div className="container_flex promo_flex">
                        <div className="promo_text">
                            <h1>Экспресс авто доставка</h1>
                            <div className="promo_text_p">
                                <p>Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг</p>
                            </div>
                            <button className='promoBtn' type='button'>Рассчитать стоимость</button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Carusel;