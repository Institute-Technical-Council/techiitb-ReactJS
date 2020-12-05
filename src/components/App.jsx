import React from 'react';

import Footer from "./Footer";
import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup"
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"
import techteams from '../techteams';
import clubs from '../clubs';

function App() {
    return (
        <div>
             
            <CarouselHome /> 
            <CardGroup title = "Technical Teams" group = {techteams} />
            <CardGroup title = "Clubs" group = {clubs}/>
            
            <Footer />
        </div>
    )
}

export default App;