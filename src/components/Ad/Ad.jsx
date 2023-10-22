import pic from '../../assets/landinPage/pic.png'

const Ad = () => {
    return (
        <div className='flex justify-center items-center h-screen'>

<div className='max-w-[900px]  mx-auto relative  '>
            <div className='mx-auto relative '>
                <img className='md:h-[113px]'   src={pic} alt="" srcset="" />
                <div className=' px-4 py-8 flex gap-[400px] bg-slate-500 bg-opacity-60  
                    mx-auto absolute left-0 right-0 bottom-0 top-0'>
                    <h1 className='text-white md:font-bold text-2xl '>PostX <br/>#1 Getting post Block </h1>
                    <button className="btn rounded-3xl">Download Now</button>

                </div>
            </div>
            
                
            </div>
            
        </div>
    );
};

export default Ad;