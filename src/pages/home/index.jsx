import React from "react";
import Header from "../../common/components/header";
import NavbarMain from "../../common/components/navbar-main";
import "./home.css"
import ImageSlider from "./components/image-slider";
import PopularOffer from "./components/popular-offers";
import Footer from "../../common/components/footer";

const Home = () =>{

return(
    <div className="home-page">
        <Header/>
        <NavbarMain/>
        <ImageSlider/>
        <div className="body-main">
        <PopularOffer/>
        </div>
        <Footer/>
       
        
    </div>
);
};

export default Home;