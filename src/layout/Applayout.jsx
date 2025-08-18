import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BackToTop } from "./BackToTop";

export const Applayout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>      
        <BackToTop/>    
        </>
    );
};