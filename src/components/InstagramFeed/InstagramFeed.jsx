
import img3 from '../../assets/cart/popular4.png'
import img4 from '../../assets/cart/Image (4).png'
import img2 from '../../assets/cart/popular2.png'
import img6 from '../../assets/landinPage/Image (6).png'
import title from '../../assets/icon/Frame 53.png'


const InstagramFeed = () => {
    return (
        < div className='md:w-[1100px] mx-auto mt-20'>

        <div>
          <img src={title} alt="" />
        </div>
            
        <div className=' p-4 py-12 grid md:grid-cols-4 gap-6'>
            
        {/* Card */}
        <div className='relative'>
          
          
          <img
          className='w-[260px] h-[260px] '
            src={img4}
            alt='/'
          />
        </div>
        
        
        {/* Card */}
        <div className=' relative'>
         
         
          <img
          className='w-[260px] h-[260px] '
            src={img2}
            alt='/'
          />
        </div>

        {/* Card */}
        <div className=' relative'>
         
          
          <img
          className='w-[260px] h-[260px] '
            src={img3}
            alt='/'
          />
        </div>

        {/* Card */}
        <div className=' relative'>
         
          
          <img
          className='w-[260px] h-[260px] '
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