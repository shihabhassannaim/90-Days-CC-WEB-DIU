import React, { useState } from 'react';
import { SlideShow } from './CarouselImage';

const Carousel = () => {
    const [Carousel, setCarousel] = useState(0);
    const ImagePlus =()=>{
        if(Carousel == 2 ){
            setCarousel(0);
        }
        else if(Carousel == 1){
            setCarousel(2);
        }
        else {
            setCarousel(1);
        }
    }
    const ImageMinus =()=>{
        if(Carousel == 2 ){
            setCarousel(1);
        }
        else if(Carousel == 1){
            setCarousel(0);
        }
        else {
            setCarousel(2);
        }
    }
    
    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className='col-span-2'>
                    <p className='text-white text-4xl mt-24 font-bold'>{SlideShow[Carousel].header}</p>
                    <p className='text-white text-l mt-3 ml-16 mr-5 leading-5'>{SlideShow[Carousel].title}</p>
                    <button className='mt-12 w-32 h-9 rounded-md bg-cyan-500 hover:bg-cyan-600 font-bold'>For Booking</button>
                </div>
                <div className='col-span-3 flex mt-28 ml-20'>
                    <div className='border-solid border-4 border-cyan-500 rounded-3xl mr-10'><img src={SlideShow[Carousel]?.imageUrl} alt="" /></div>
                    <div className='mr-10'><img src={SlideShow[Carousel + 1 ]?.imageUrl} alt="" /></div>
                    <div><img src={SlideShow[Carousel + 2]?.imageUrl} alt="" /></div>
                </div>
            </div>
            <div className='mt-10'>
                <button className='mt-12 w-32 h-9 rounded-md bg-cyan-500 hover:bg-cyan-600 font-bold mr-10' onClick={ImageMinus}>Prev</button>
                <button className='mt-12 w-32 h-9 rounded-md bg-cyan-500 hover:bg-cyan-600 font-bold ml-10' onClick={ImagePlus}>Next</button>
            </div>
        </div>
    );
};

export default Carousel;