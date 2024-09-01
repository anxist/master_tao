import React, { Component } from 'react';
import Basic from '../image/basic-avto.png'
import Super from '../image/super-auto.png'
import Avia from '../image/avia.png'
import Train from '../image/rjd.png'
import Sea from '../image/sea.png'

class CaruselVariants extends Component {
    componentDidMount() {
        const carusel = document.querySelector('.carusel-delivery');
        const leftArrow = document.querySelector('.fa-angle-left');
        const rightArrow = document.querySelector('.fa-angle-right');

        if (!carusel) {
            console.error('Element with class .carusel-delivery not found!');
            return;
        }

        const deliveryBlocks = document.querySelectorAll('.delivery-block');
        const blockWidth = deliveryBlocks[0].offsetWidth;
        let isDragStart = false, prevPageX, prevScrollLeft;

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carusel.scrollLeft;
            carusel.classList.add('dragging');
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            e.preventDefault();
            let pageX = e.pageX || e.touches[0].pageX;
            const positionDiff = pageX - prevPageX;
            carusel.scrollLeft = prevScrollLeft - positionDiff;
        }

        const dragStop = () => {
            isDragStart = false;
            carusel.classList.remove('dragging');
        }

        const scrollLeft = () => {
            carusel.scrollTo({
                left: carusel.scrollLeft - blockWidth,
                behavior: 'smooth'
            });
        }

        const scrollRight = () => {
            carusel.scrollTo({
                left: carusel.scrollLeft + blockWidth,
                behavior: 'smooth'
            });
        }

        carusel.addEventListener('mousedown', dragStart);
        carusel.addEventListener('mousemove', dragging);
        carusel.addEventListener('mouseup', dragStop);
        carusel.addEventListener('mouseleave', dragStop);

        carusel.addEventListener('touchstart', dragStart);
        carusel.addEventListener('touchmove', dragging);
        carusel.addEventListener('touchend', dragStop);

        leftArrow.addEventListener('click', scrollLeft);
        rightArrow.addEventListener('click', scrollRight);
    }

    render() {
        return (
            <div className="container_carusel-delivery">
                <div className="wrapper-delivery">
                    <i className='fa-solid fa-angle-left'></i>
                    <h3>Варианты доставки грузов из Китая</h3>
                    <div className="carusel-delivery">
                        <div className="delivery-block">
                            <div className='delivery-flex'>
                                <img
                                    src={Basic}
                                    alt="Автомобиль базовой комплектации"
                                />
                                <div>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-block">
                            <div className='delivery-flex'>
                                <img
                                    src={Super}
                                    alt="Автомобиль супер комплектации"
                                />
                                <div>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-block">
                            <div className='delivery-flex'>
                                <img
                                    src={Avia}
                                    alt="Авиа"
                                />
                                <div>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-block">
                            <div className='delivery-flex'>
                                <img
                                    src={Train}
                                    alt="Поезд"
                                />
                                <div>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="delivery-block">
                            <div className='delivery-flex'>
                                <img
                                    src={Sea}
                                    alt="Морской транспорт"
                                />
                                <div>
                                    <p>
                                        lorem
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className='fa-solid fa-angle-right'></i>
                </div>
            </div>
        );
    }
}

export default CaruselVariants;