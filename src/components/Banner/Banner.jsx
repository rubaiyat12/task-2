

import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

    const slides = [
      {
        url: 'https://i.ibb.co/kypDkDW/Image.png',
      },
      {
        url: 'https://i.ibb.co/V3d92By/1.png',
      },
      {
        url: 'https://i.ibb.co/cx60nM2/2.png',
      },
  
      {
        url: 'https://i.ibb.co/q1yqv8S/3.png',
      },
      {
        url: 'https://i.ibb.co/kypDkDW/Image.png',
      },
    ];
    



const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
    return (
        <div className="App">
      
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500'
      >
        <div className=" flex items-center  px-4 py-8  border-2 
                  shadow-lg md:w-[480px] md:h-[326px]  absolute top-[230px] left-[690px] right-0 -bottom-14
                   ">
                    <div className='text-white mx-10    border-white'>
                        
                    <p className='border-b w-[32px] text-[14px] mb-4  border-white  '>SKIN </p>
                    <p className='md:font-bold font-Vidaloka text-2xl mb-4'> Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat.</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>
                        
                  <button className="btn  border-none  text-white mt-2 bg-transparent ">continue reading  <AiOutlineArrowRight></AiOutlineArrowRight></button>
                           
                            
                        

                    </div>
                    </div>

      </div>






      {/* Left Arrow */}
      <div className='  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
    </div>
    );
};

export default Banner;