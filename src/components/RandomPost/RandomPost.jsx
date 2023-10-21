import img1 from '../../assets/landinPage/Image (1).png'
import img3 from '../../assets/landinPage/Image (3).png'
import img4 from '../../assets/landinPage/Image (4).png'
import img6 from '../../assets/landinPage/Image (6).png'
import img7 from '../../assets/landinPage/Image (7).png'
import img8 from '../../assets/landinPage/Image (8).png'
import Border from '../Border/Border';

const RandomPost = () => {
    return (
        <div className='max-w-[900px] mx-auto -mt-[150px] '>
            <h2 className="mx-auto text-center mb-5">Random Post</h2>
            <div>
            <div className='mx-auto relative'>
                <img  src={img1} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute left-[330px] right-0 bottom-[120px]'>
                    <p className=' border-b border-[#1D1A1A] w-[30px]'>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>

            </div>
            <Border></Border>
            <div>
            <div className='mx-auto relative'>
                <img  className='mx-[270px]' src={img3} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute right-[440px] left-0 bottom-[120px]'>
                    <p className='  '>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>

            </div>

            <Border></Border>

            
            <div className='mx-auto relative'>
                <img className='w-[596px] '  src={img4} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute left-[330px] right-0 bottom-[120px]'>
                    <p className='  '>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>
            <Border></Border>

            <div>
            <div className='mx-auto relative'>
                <img  className='mx-[270px] w-[596px]' src={img6} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute right-[440px] left-0 bottom-[120px]'>
                    <p className='  '>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>

            </div>
            <Border></Border>
            <div className='mx-auto relative'>
                <img className='w-[596px] '  src={img7} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute left-[330px] right-0 bottom-[120px]'>
                    <p className='  '>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>
            <Border></Border>
            <div>
            <div className='mx-auto relative'>
                <img  className='mx-[270px] w-[596px]' src={img8} alt="" srcset="" />
                <div className=' px-4 py-8 bg-white border-2 border-black
                  shadow-lg  mx-auto absolute right-[440px] left-0 bottom-[120px]'>
                    <p className='  '>Hair </p>
                    <h1 >Sed dignissim quam nulla, at sodales elit venenatis at, In in fringla</h1>
                    <p>Donec eget leo laoreet, faucibus ante et, finibus orci, Nam pulvinar
                        felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis....
                    </p>
                    <p>By Sarfraz Jasmin - 29 July, 2023</p>

                </div>
            </div>

            </div>

            <Border></Border>
            <div className='mx-[340px]'>
            <button className="btn btn-active btn-neutral rounded-full w-[182px]">Load More</button>

            </div>
            

            </div>
           
           
            
        
    );
};

export default RandomPost;