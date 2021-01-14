import React from 'react';

import '../style/main.css';
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
import CertiMain from "./CertiMain";


import FinalFooter from "./FinalFooter";
import BlogCardsGroup from "./BlogsCardsGroup";
import ComingSoon from "react-coming-soon";
import Team2020 from "./Team2020";


import BarGraph from './BarGraphTechCup';
import Pie from './PieChart';
import TechScores from './TechScores'
import FooterTechCup from './FooterTech';
import certi_main from "../certi_main";
import CertiMainGroup from "./CertiMainGroup";

import AeroBlogs from './AeroBlogs'
import IndividualBlog from './IndividualBlog'


// React Routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <NavBar nav_items={["Home", "Events", "Certificates", "Blogs", "Tech Cup", "Documentations", "Team 2020-21"]} present={"Hall of Fame"} logo_src={itc} />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/home' exact component={Home} />


                        <Route path='/techcup' component={TechScores} />

                        <Route path='/documentations' component={() => {
                            window.location.href = 'https://tech-iitb.org/documentation';
                            return null;
                        }} />
                        <Route path='/events' render={(props) => (<LatestEvents {...props} heading="Upcoming Events" />)} />
                        <Route path='/techteams' render={(props) => (<CardGroup {...props} title="Technical Teams" group={techteams} />)} />
                        <Route path='/clubs' render={(props) => (<CardGroup {...props} title="Clubs" group={clubs} />)} />
                        <Route path='/blogs' exact render={(props) => (<BlogCardsGroup {...props} title="Blogs" group={blogs} />)} />
                        <Route path='/certificates' component={() => {
                            window.location.href = 'https://tech-iitb.org/certificates';
                            return null;
                        }} />
                        {/* We will use this after react frontend is integrated with api
                        <Route path='/certificates' render={(props) => (<CertiMainGroup {...props} title="Choose Your Event" group={certi_main} />)} />
                        */}
                        <Route path='/team2020-21' component={Team2020} />
                        <Route path='/aero' component = {AeroBlogs}/> #Kushal
                        <Route path = '/blogs/:id' component = {IndividualBlog}></Route> #Kushal - individual blog frontend
                    </Switch>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           q

                    <section>
                        {/*<FooterTechCup />*/}
                        {/* <Team2020 /> */}
                        <FinalFooter />

                    </section>
                </div>
            </Router>
        )
    }
}

const Home = () => (
    <div>
        <CarouselHome />
        <LatestEvents heading={"Upcoming Events"} />

        <CardGroup title="Clubs" group={clubs} />

        <BlogCardsGroup title="Blogs" group={blogs} />

       
        <CardGroup title="Technical Teams" group={techteams} />


        {/*
             <section>
                <Services heading="Our services" subheading="These are our services provided to IITB community"/>
            </section>
            <section>
                <CounterContainer heading="Some numbers" subheading="These are some numbers which describe us"/>
            </section>
            */}
        {/* <section>
                <BlogCardsGroup title ="Blogs" group ={blogs}/>
            </section> */}
    </div>
)
export default App;