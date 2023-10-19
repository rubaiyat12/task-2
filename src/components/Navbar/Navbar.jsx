import logo from '../../assets/icon/Logo.png'


const Navbar = () => {
    return (
      
      
        <div className="navbar  bg-base-100 ">
         
          
  <div className="navbar-start px-20 ">
    
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Categories</a></li>
       
        <li><a>Makeup</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
        <li><a>contact us</a></li>
      </ul>
    </div>
    <img  className='w-20 mx-20' src={logo} alt=""  />
  </div>
  <div className="navbar-center hidden lg:flex px-20 ">
    <ul className="menu menu-horizontal px-1 ">
    <li><a>Home</a></li>
        <li><a>Categories</a></li>
       
        <li><a>Makeup</a></li>
        <li><a>Blog</a></li>
        <li><a>About</a></li>
        <li><a>contact us</a></li>
    </ul>
  </div>
  <div className="navbar-end px-20">
    <span>search</span>
  <button className="btn btn-ghost btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
    );
};

export default Navbar;