import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";
import HeadingCart from "../components/HeadingCart/HeadingCart";
import Latest from "../components/Latest/Latest";
import RandomPost from "../components/RandomPost/RandomPost";




const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <Banner></Banner>
            <HeadingCart></HeadingCart>
            <Latest></Latest>

            <RandomPost></RandomPost>
            
            
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;