


const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-20 max-w-[900px] mx-auto">
  
  
    
        <fieldset className="form-control w-[600px] mx-[150px]">
          <h1 className="text-2xl mx-auto">vasd kugsvdg khuac</h1>
          <h1 className="text-2xl mx-auto">vasd kugsvdg</h1>
          <div className="my-5">
          <div className="relative ">
            <input type="text" placeholder="Enter your email address" className="input input-bordered rounded-full w-full pr-16" /> 
            <button className="btn btn-neutral  absolute top-0 right-0 rounded-full">Subscribe</button>
          </div>
          
          <div className="flex mx-[80px] mt-3">
          <label className="label cursor-pointer">
      
         
        <input type="checkbox" checked="" className="checkbox  " />
        <span>I agree that mu submitted data is being collected and stored.</span>
        </label>
     
    </div>
          </div>
        </fieldset>
        
      
    </footer>
    
    );
};

export default Footer;