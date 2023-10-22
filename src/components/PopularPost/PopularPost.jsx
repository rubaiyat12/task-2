import popular1 from '../../assets/cart/popular4.png'
import popular2 from '../../assets/cart/popular1.png'
import img4 from '../../assets/cart/Image (4).png'
import popular3 from '../../assets/cart/popular2.png'
import popular4 from '../../assets/cart/popular3.png'





const PopularPost = () => {
    return (
        <div>
             <div className='grid lg:grid-cols-3 max-w-[900px] mx-auto gap-4 justify-between '>

           
<div className='mx-auto relative'>
    <img  src={popular1} alt="" srcset="" />
    <div className='text-center px-4 py-8 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Skin </p>
        <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative'>
    <img  src={popular2} alt="" srcset="" />
    <div className='text-center px-4 py-8 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Hair </p>
        <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative'>
    <img  src={img4} alt="" srcset="" />
    <div className='text-center px-4 py-8 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
        <p className='border-b w-[50px] text-[14px] mx-auto border-black  '>Makeup </p>
        <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>



</div>
<div className='grid lg:grid-cols-2 max-w-[900px] mx-auto gap-4 justify-between mt-20 mb-20 '>
<div className='mx-auto relative'>
    <img  src={popular3} alt="" srcset="" />
    <div className='text-center px-4 py-8 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>skin </p>
        <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
<div className='mx-auto relative'>
    <img  src={popular4} alt="" srcset="" />
    <div className='text-center px-4 py-8 bg-white border-2 border-black
      shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
        <p className='border-b w-[35px] text-[14px] mx-auto border-black  '>Tips </p>
        <p className='md:font-bold'> Vivamus placerat Luctus Neque nee Faucibus</p>
        <p className='text-[12px]'>By Sarfraz Jasmin - 29 july,2023</p>

    </div>
</div>
</div>
            
        </div>
    );
};

export default PopularPost;