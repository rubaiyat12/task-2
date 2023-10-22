import img from '../../assets/cart/Image.png';
import icon from '../../assets/icon/Social.png'
import icon2 from '../../assets/icon/(85 posts).png'
import Ad from '../../assets/banner/Ad 2.png'



const Morbi = () => {
    return (
      <div className='md:w-[1440px] mx-auto'>
        <footer className="footer  bg-base-200 mb-6  text-base-content rounded">
  
  <div className='flex  p-10 md:w-[1100px]  mx-auto'>
    <div className='rounded-3xl  mt-4 ' >
      <img className='rounded-[50%] h-[150px] w-[380px] ' src={img} alt="" srcset="" />

    </div>
    <div className='ml-5 mt-5'>
      <h1 className='text-2xl'>Morbi Porttitror</h1>
      <p className=''>Onvallis porttitor ligula leo a lectus. Donec id venenatis magna. Vivamus pla luctus neque nec faucibus. Aliquam Gravida eu Tortor vitae tempor. 
        . Mauris condimentum scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!
        
        </p>
        <div className='flex gap-40 mt-3'>
        <div className='mt-2'>
          <img src={icon} alt="" />
        </div>
        <div className='mt-2'>
          <img src={icon2} alt="" />
        </div>
        </div>

        
        

        </div>

    </div>
    
 
 
</footer>
<div className='md:w-[1110px] mx-auto'>
  <img src={Ad} alt="" />
</div>

</div>
    );
};

export default Morbi;