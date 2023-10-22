import img1 from '../../assets/cart/Image (1).png'
import img5 from '../../assets/cart/Image (5).png'
import img2 from '../../assets/cart/Image (2).png'
import img7 from '../../assets/cart/Image (7).png'
import Ad from '../../assets/banner/Ad 1.png'
import title from '../../assets/icon/Frame 8.png'



const Latest = () => {
    return (
        <div className=' md:w-[1100px] mx-auto'>
          <div className='mb-6'>
            <img src={title} alt="" />
          </div>

          

           <div className='grid lg:grid-cols-3  mx-auto gap-4 justify-between '>

           
            <div className='mx-auto relative'>
                <img  src={img1} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Hair </p>
                    <p className='md:font-bold font-Vidaloka'> Vivamus placerat Luctus Neque nee Faucibus</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img5} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[50px] text-[14px] mx-auto border-black  '>MakeUp </p>
                    <p className='md:font-bold font-Vidaloka'> Vivamus placerat Luctus Neque nee Faucibus</p>
                    <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img2} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Tips </p>
                    <p className='md:font-bold font-Vidaloka'> Vivamus placerat Luctus Neque nee Faucibus</p>
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
                    <p className='md:font-bold font-Vidaloka'> Sed dignissim quam nulla, at sodales elit venenatis at. In in fringilla</p>
                  
                         <p>Donec eget loe laoreet, faucibus ante et, finibus orci . nam pulbinar felis velmi aliqum , vitae
                          odio euismod. Cras bibendum nisi a interdum facilisi...
                         </p>
                         <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>
                </div>
            </div>
            
                
            </div>

            <div className=' mt-20 mb-10'>
              <img  src={Ad} alt="" />
            </div>

            
            
        </div>
    );
};

export default Latest;