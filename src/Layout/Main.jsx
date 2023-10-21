import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";
import HeadingCart from "../components/HeadingCart/HeadingCart";
import Latest from "../components/Latest/Latest";
import RandomPost from "../components/RandomPost/RandomPost";
import InstagramFeed from "../components/InstagramFeed/InstagramFeed";
import Footer from "../components/Footer/Footer";




const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <Banner></Banner>
            <HeadingCart></HeadingCart>
            <Latest></Latest>

            <RandomPost></RandomPost>
            <InstagramFeed></InstagramFeed>
            <Footer></Footer>
            
            
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;