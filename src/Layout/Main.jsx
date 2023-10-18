import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import Banner from "../components/Banner/Banner";


const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;