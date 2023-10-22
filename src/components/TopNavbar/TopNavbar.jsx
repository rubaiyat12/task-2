import img from '../../assets/frame/Social.png'


const TopNavbar = () => {
    return (
        <div className=" navbar  md:w-[1100px] mx-auto  border-b  ">
            <h3 className=" text-[#6F6F6F;] md:w-[300px]  ">Welcome there!</h3>
            <div className="navbar-end  ml-[400px]">
                
                <img src={img} alt="" />
    <div className='ml-[100px]'>
    <button className="btn bg-black text-white  rounded-3xl ">Subscribe</button>

    </div>

                
    
   
    
    </div>
  </div>
            
            
        
    );
};

export default TopNavbar;