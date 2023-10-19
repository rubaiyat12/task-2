
import img3 from '../../assets/cart/Image (3).png'
import img4 from '../../assets/cart/Image (4).png'
import img2 from '../../assets/cart/Image (2).png'
import img6 from '../../assets/landinPage/Image (6).png'


const InstagramFeed = () => {
    return (
        < div className='mt-20 max-w-[900px] mx-auto'>
        <h2 className="mx-auto text-center mb-5">Random Post</h2>
            
        <div className=' p-4 py-12 grid md:grid-cols-4 gap-6'>
            
        {/* Card */}
        <div className='relative'>
          
          
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover '
            src={img4}
            alt='/'
          />
        </div>
        
        
        {/* Card */}
        <div className='rounded-xl relative'>
         
         
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover '
            src={img2}
            alt='/'
          />
        </div>

        {/* Card */}
        <div className='rounded-xl relative'>
         
          
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover '
            src={img3}
            alt='/'
          />
        </div>

        {/* Card */}
        <div className='rounded-xl relative'>
         
          
          <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover '
            src={img6}
            alt='/'
          />
        </div>
        
        
       
       
      </div>
      <div className='max-w-[800px] mx-auto'>
      <button className="btn btn-block btn-neutral rounded-full ">Follow Us</button>
      </div>
     
      </div>
      
    );
};

export default InstagramFeed;