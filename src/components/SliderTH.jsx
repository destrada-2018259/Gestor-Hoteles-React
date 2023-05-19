import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.png'
import hotel3 from './images/hotel3.jpeg'
import '../index.css'

export const SliderTH = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block slider-image"
                        src={hotel2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='title-slider'>Todo-Hoteles</h1>
                        <p className='text-slider'>Encuentra tu hogar, lejos de tu casa.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block slider-image"
                        src={hotel3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='title-slider'>El mejor servicio!</h1>
                        <p className='text-slider'>
                            Manejamos un excelente servicio de reservaciones al rededor del mundo.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
