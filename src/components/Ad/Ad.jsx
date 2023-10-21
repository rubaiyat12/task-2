import pic from '../../assets/landinPage/pic.png'

const Ad = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

<div className='max-w-[900px]  mx-auto relative '>
            <div className='mx-auto relative'>
                <img className=''   src={pic} alt="" srcset="" />
                <div className='text-center px-4 py-8 flex gap-[600px]  
                   md:w-5/6 mx-auto absolute left-0 right-0 -bottom-2'>
                    <p className='text-white '>Tips </p>
                    <button className="btn rounded-3xl">Download Now</button>

                </div>
            </div>
            
                
            </div>
            
        </div>
    );
};

export default Ad;