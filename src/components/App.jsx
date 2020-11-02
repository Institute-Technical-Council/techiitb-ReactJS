import React from 'react';

import Footer from "./Footer";
import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup"
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"

function App() {
    return (
        <div>
            <CarouselHome />  
            <NavBar nav_items={["Home","Documentations","Hall of Fame"]} present={"Home"} logo_src={itc}/>
            <CardGroup />
            <Footer />
        </div>
    )
}

export default App;