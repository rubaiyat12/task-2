import img1 from '../../assets/cart/Image (1).png'
import img5 from '../../assets/cart/Image (5).png'
import img2 from '../../assets/cart/Image (2).png'
import img7 from '../../assets/cart/Image (7).png'
import Ad from '../Ad/Ad';

const Latest = () => {
    return (
        <div>
           <div className='relative mb-7'>
  <hr className='text-black border-0 bg-black h-[3px]' style={{ zIndex: 1 }} />
  <div className='absolute mx-auto' style={{ zIndex: 10 }}>
    <h2 className="mx-auto text-center mb-5">Latest Projects</h2>
  </div>
</div>
            
           <div className='grid lg:grid-cols-3 max-w-[900px] mx-auto gap-4 justify-between '>

           
            <div className='mx-auto relative'>
                <img  src={img1} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Hair </p>
                    <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img5} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[50px] text-[14px] mx-auto border-black  '>MakeUp </p>
                    <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img2} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Tips </p>
                    <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

                </div>
            </div>
            
            
            </div>
            <div className='max-w-[900px] mx-auto relative mt-20'>
            <div className='mx-auto relative'>
                <img  src={img7} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[35px] text-[14px] mx-auto border-black '>Tips </p>
                    <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus. Vivamus placerat Luctus Neque
                         nee Faucibus. Vivamus placerat Luctus Neque nee Faucibus.Vivamus placerat Luctus Neque nee Faucibus</p>
                  
                         <p>Donec eget loe laoreet, faucibus ante et, finibus orci . nam pulbinar felis velmi aliqum , vitae
                          odio euismod. Cras bibendum nisi a interdum facilisi...
                         </p>
                         <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>
                </div>
            </div>
            
                
            </div>

            <Ad></Ad>
            
        </div>
    );
};

export default Latest;