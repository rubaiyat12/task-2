import logo from '../../assets/icon/Logo.png';
import frame1 from '../../assets/frame/Frame.png';
import frame2 from '../../assets/frame/Image (3).png';
import frame3 from '../../assets/frame/Frame (1).png';
import frame4 from '../../assets/frame/Rectangle 8.png';
import frame5 from '../../assets/frame/Frame (2).png';
import frame6 from '../../assets/frame/Frame (3).png';
import tag from '../../assets/frame/Tags.png';
import bottom from '../../assets/frame/Footer Bottom.png';
import pic1 from '../../assets/frame/frame.png';
import pic2 from '../../assets/frame/frame (1).png';
import top from '../../assets/frame/Footer Bottom Top.png';


const FooterBottom = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-black">
            <footer className="footer p-10  text-white">
  <nav className='w-[260px] h-[414px]'>
    <header className="footer-title text-white">CATEGORIES</header> 
    <a className="link link-hover border-b border-white  w-[150px]">Beauty<span className="mx-24">(4)</span></a> 
    <a className="link link-hover border-b border-white  w-[150px]">Fashion<span className="mx-[90px]">(8)</span></a> 
    <a className="link link-hover border-b border-white  w-[150px]">Makeup<span className="mx-[86px]">(6)</span></a> 
    <a className="link link-hover border-b border-white  w-[150px]">Body<span className="mx-[105px]">(2)</span></a> 
    <a className="link link-hover border-b border-white  w-[150px]">Lifestyle<span className="mx-[87px]">(7)</span></a>

    <button className="btn btn-ghost btn-circle form-control relative">
    <input type="text" placeholder="Search" className="input h-10 input-bordered w-20 md:w-auto bg-[#cfcfcf6b]"   />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-[200px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> 
    
    
  </nav> 
  <nav className='w-[317px] h-[415px]'>
    <header className="footer-title">POPULAR POST</header> 
    <div className='flex '>
      <div className=''>
        <img className='' src={pic1} alt="" />

      </div>
      <div className='ml-2'>
        <h2 className='text-[20px] '>Vivamus placerat Luctus Neque nec Faucibus</h2>
        <p className='text-[#CFCFCF] '>3 days ago</p>

      </div>
    </div>
    <div className='flex '>
      <div className=''>
        <img className='' src={pic2} alt="" />

      </div>
      <div className='ml-2'>
        <h2 className='text-[20px]'>Vivamus placerat Luctus Neque nec Faucibus</h2>
        <p className='text-[#CFCFCF] '>3 days ago</p>

      </div>
    </div>
    <div className='flex '>
      <div className=''>
        <img className='' src={frame2} alt="" />

      </div>
      <div className='ml-2'>
        <h2 className='text-[20px]'>Vivamus placerat Luctus Neque nec Faucibus</h2>
        <p className='text-[#CFCFCF] '>3 days ago</p>

      </div>
    </div>
  </nav> 
  <nav>
    <header className="footer-title">GALLERY</header> 
    <div className='grid lg:grid-cols-3 gap-1 max-w-[332px] h-[216]'>
      <div>
        <img src={frame1} alt="" />
      </div>
      <div>
        <img src={frame2} alt="" />
      </div>
      <div>
        <img src={frame3} alt="" />
      </div>
      <div>
        <img src={frame4} alt="" />
      </div>
      <div>
        <img src={frame5} alt="" />
      </div>
      <div>
        <img src={frame6} alt="" />
      </div>
    </div>
    <div>
      <img src={tag} alt="" />
    </div>
  </nav>
</footer> 
<div className='border-t p-10'>
  <img src={top} alt="" />
</div>
<div className='border-t p-10  text-white border-base-300'>
  <img src={bottom} alt="" />

</div>

            
        </div>
    );
};

export default FooterBottom;