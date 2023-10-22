import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";
import HeadingCart from "../components/HeadingCart/HeadingCart";
import Latest from "../components/Latest/Latest";
import RandomPost from "../components/RandomPost/RandomPost";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/FooterBottom/FooterBottom";
import Morbi from "../components/Morbi/Morbi";
import PopularPost from "../components/PopularPost/PopularPost";





const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <Banner></Banner>
    
            <HeadingCart></HeadingCart>
            
            <Latest></Latest>
            <PopularPost></PopularPost>
            <Morbi></Morbi>
           

            <RandomPost></RandomPost>
            <InstagramFeed></InstagramFeed>
            <Footer></Footer>
            <FooterBottom></FooterBottom>
            
            
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;