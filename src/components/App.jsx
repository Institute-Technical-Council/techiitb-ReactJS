import React from 'react';

import Footer from "./Footer";
import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup"
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"
import techteams from '../techteams';
import clubs from '../clubs';

class App extends React.Component {
    
    render () {
        return (
        <div>
             
            <CarouselHome /> 
            <section>
            <CardGroup title = "Technical Teams" group = {techteams} />
            </section>
            <CardGroup title = "Clubs" group = {clubs}/>
            
            <Footer />
        </div>
        )
        }
}

export default App;