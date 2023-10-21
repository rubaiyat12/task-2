
import img1 from '../../assets/cart/Image (1).png'
import img2 from '../../assets/cart/Image (2).png'
import img3 from '../../assets/cart/Image (3).png'
import img4 from '../../assets/cart/Image (4).png'
import img6 from '../../assets/cart/Image (6).png'


const HeadingCart = () => {
    return (
        <div className='max-w-[900px] mx-auto p-4 py-12 grid md:grid-cols-5 gap-6'>
      {/* Card */}
      <div className='relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-white'>
          
        <button className='btn my-5 rounded-3xl btn-outline w-[84px]   border-white text-[#FFFFFF]  mx-8 absolute bottom-4'>SKIN</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
          src={img3}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full   text-white'>
         
        <button className='btn my-5 rounded-3xl btn-outline w-[84px]   border-white text-[#FFFFFF]  mx-8 absolute bottom-4'>HAIR</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
          src={img1}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full   text-white'>
          
        <button className='btn my-5 rounded-3xl btn-outline w-[84px]   border-white text-[#FFFFFF]  mx-8 absolute bottom-4'>MAKEUP</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
          src={img2}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full   text-white'>
          
        <button className='btn my-5 rounded-3xl btn-outline w-[84px]   border-white text-[#FFFFFF]  mx-8 absolute bottom-4'>TIPS</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
          src={img3}
          alt='/'
        />
      </div>
      
     
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full   text-white'>
          
          <button className='btn my-5 rounded-3xl btn-outline w-[84px]   border-white text-[#FFFFFF]  mx-8 absolute bottom-4'>SPA</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover '
          src={img6}
          alt='/'
        />
      </div>
    </div>
    );
};

export default HeadingCart;