import React from 'react';

import Footer from "./Footer";
import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup"
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"
import techteams from '../techteams';
import clubs from '../clubs';
import blogs from "../blogs";
import Services from './Service';
import CounterContainer from './CounterContainer';
import LatestEvents from './LatestEvents';

class App extends React.Component {
    
    render () {
        return (
        <div>
             
             <CarouselHome />
            <section>
                <LatestEvents heading="Upcoming Events"/>
            </section>
            <section>
                <Services heading="Our services" subheading="These are our services provided to IITB community"/>
            </section>
            <section>
                <CounterContainer heading="Some numbers" subheading="These are some numbers which describe us"/>
            </section>
            <section>
                <CardGroup title = "Technical Teams" group = {techteams} />
            </section>
                <CardGroup title = "Clubs" group = {clubs}/>
            
            {/*<Footer />*/}
        </div>
        )
        }
}

export default App;