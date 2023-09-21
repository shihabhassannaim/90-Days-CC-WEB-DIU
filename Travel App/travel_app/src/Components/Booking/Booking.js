import React from 'react';
import Header from '../Header/Header';
import '../Home/Home.css'
import { SlideShow } from '../Carousel/CarouselImage';

const Booking = () => {
    return (
        <div className='Home'>
            <Header></Header>
            <div className='col-span-2'>
                    {/* <p className='text-white text-4xl mt-24 font-bold'>{SlideShow[Carousel].header}</p>
                    <p className='text-white text-l mt-3 ml-16 mr-5 leading-5'>{SlideShow[Carousel].title}</p> */}
                </div>
        </div>
    );
};

export default Booking;