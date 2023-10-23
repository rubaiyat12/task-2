import popular1 from '../../assets/cart/popular4.png'
import popular2 from '../../assets/cart/popular1.png'
import img4 from '../../assets/cart/Image (4).png'
import popular3 from '../../assets/cart/popular2.png'
import popular4 from '../../assets/cart/popular3.png'
import title from '../../assets/icon/Frame 18.png'





const PopularPost = () => {
    return (
        <div className=' md:w-[1100px] mx-auto'>
          <div className='mb-6'>
            <img src={title} alt="" />
          </div>
             <div className='grid lg:grid-cols-3  mx-auto gap-4 justify-between '>

           
<div className='mx-auto relative mb-8'>
    <img  src={popular1} alt="" srcset="" />
    <div className='text-center  py-4 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-20'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black mb-2 '>SKIN</p>
        <p className='md:font-bold font-Vidaloka'> Vivamus placerat <br /> Luctus Neque nee <br /> Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative mb-8'>
    <img  src={popular2} alt="" srcset="" />
    <div className='text-center  py-4 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-20'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black mb-2 '>HAIR </p>
        <p className='md:font-bold font-Vidaloka'> Vivamus placerat <br /> Luctus Neque nee <br /> Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative mb-8'>
    <img  src={img4} alt="" srcset="" />
    <div className='text-center  py-4 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-20'>
        <p className='border-b w-[50px] text-[14px] mx-auto border-black mb-2 '>MAKEUP</p>
        <p className='md:font-bold font-Vidaloka'> Vivamus placerat <br /> Luctus Neque nee <br /> Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>



</div>
<div className='grid lg:grid-cols-2 max-w-[900px] mx-auto gap-4 justify-between mt-20 mb-[120px] '>
<div className='mx-auto relative '>
    <img  src={popular3} alt="" srcset="" />
    <div className='text-center py-4 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-20'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black mb-2 '>SKIN </p>
        <p className='md:font-bold font-Vidaloka'> Vivamus placerat <br /> Luctus Neque nee <br /> Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative'>
    <img  src={popular4} alt="" srcset="" />
    <div className='text-center py-4 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-20'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black mb-2 '>TIPS </p>
        <p className='md:font-bold font-Vidaloka'> Vivamus placerat <br /> Luctus Neque nee <br /> Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
</div>
            
        </div>
    );
};

export default PopularPost;