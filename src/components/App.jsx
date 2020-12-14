import React from 'react';


import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup";
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"
import techteams from '../techteams';
import clubs from '../clubs';
import blogs from "../blogs";
import Services from './Service';
import CounterContainer from './CounterContainer';
import LatestEvents from './LatestEvents';

import FinalFooter from "./FinalFooter";
import BlogCardsGroup from "./BlogsCardsGroup";



import BarGraph from './BarGraphTechCup';
import Pie from './PieChart';
import TechScores from './TechScores'
import FooterTechCup from './FooterTech';



// React Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    
    render () {
        return (
            <Router>
        <div>
        <NavBar nav_items={["Home","Events","Certificates", "Blogs", "Clubs", "Tech Teams", "Tech Cup","IITB Corner", "Documentations", "Team 2020-21"]} present={"Hall of Fame"} logo_src={itc}/>
            <Switch>
             <Route path = '/' exact component = {Home}/>
             <Route path = '/techcup' component = {TechScores} />
             <Route path='/events' render={(props) => ( <LatestEvents {...props} heading="Upcoming Events" /> )}/>
             <Route path='/techteams' render={(props) => ( <CardGroup {...props} title="Technical Teams" group = {techteams} /> )}/>
             <Route path='/clubs' render={(props) => ( <CardGroup {...props} title="Clubs" group = {clubs} /> )}/>
             <Route path='/blogs' render={(props) => ( <BlogCardsGroup {...props} title="Blogs" group = {blogs} /> )}/>
            </Switch>
            {/* {<FinalFooter />} */}
            <section>
            <FooterTechCup />
            </section>
        </div>
        </Router>
        )
        }
}

const Home = () => (
    <div>
                 <CarouselHome />
             <section>
                <Services heading="Our services" subheading="These are our services provided to IITB community"/>
            </section>
            <section>
                <CounterContainer heading="Some numbers" subheading="These are some numbers which describe us"/>
            </section>
            {/* <section>
                <BlogCardsGroup title ="Blogs" group ={blogs}/>
            </section> */}
    </div>
)
export default App;