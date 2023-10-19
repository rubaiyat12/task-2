import img1 from '../../assets/cart/Image (1).png'
import img5 from '../../assets/cart/Image (5).png'
import img2 from '../../assets/cart/Image (2).png'
import img7 from '../../assets/cart/Image (7).png'

const Latest = () => {
    return (
        <div>
            <h2 className="mx-auto text-center mb-5">Latest Projects</h2>
           <div className='grid lg:grid-cols-3 max-w-[900px] mx-auto gap-4 justify-between '>

           
            <div className='mx-auto relative'>
                <img  src={img1} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b-2 border-black  '>Hair </p>
                    <p> Vivamus placerat Luctus Neque nee Faucibus</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img5} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b-2 border-black  '>MakeUp </p>
                    <p> Vivamus placerat Luctus Neque nee Faucibus</p>

                </div>
            </div>
            <div className='mx-auto relative'>
                <img  src={img2} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b-2 border-black  '>Tips </p>
                    <p> Vivamus placerat Luctus Neque nee Faucibus</p>

                </div>
            </div>
            
            
            </div>
            <div className='max-w-[900px] mx-auto relative mt-20'>
            <div className='mx-auto relative'>
                <img  src={img7} alt="" srcset="" />
                <div className='text-center px-4 py-8 bg-white border-2 border-black
                  shadow-lg md:w-5/6 mx-auto absolute left-0 right-0 -bottom-14'>
                    <p className='border-b-2 border-black  '>Tips </p>
                    <p> Vivamus placerat Luctus Neque nee Faucibus. Vivamus placerat Luctus Neque
                         nee Faucibus. Vivamus placerat Luctus Neque nee Faucibus.Vivamus placerat Luctus Neque nee Faucibus</p>

                </div>
            </div>
            
                
            </div>
            
        </div>
    );
};

export default Latest;