import React from 'react';
import Team2020 from '../team2020';

import CarouselHome from "./Carousel";
import CardGroup from "./CardGroup";
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"
import techteams from '../techteams';
import clubs from '../clubs';

import axios from 'axios';

import Services from './Service';
import CounterContainer from './CounterContainer';
import LatestEvents from './LatestEvents';

import FinalFooter from "./FinalFooter";
import BlogCardsGroup from "./BlogsCardsGroup";
import ComingSoon from "react-coming-soon";
import Home from "./Home";


import BarGraph from './BarGraphTechCup';
import Pie from './PieChart';
import TechScores from './TechScores'
import FooterTechCup from './FooterTech';




// React Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import team2020final from "./team2020final";

class App extends React.Component {
    state = {
        blogs: []
    }
    componentDidMount() {
            axios.get('http://localhost:8000/api/v1/blogs/')
            .then(res=> {
              this.setState({blogs : res.data})
            })
    }
    render () {
        return (
            <Router>
        <div>
        <NavBar nav_items={["Home","Events","Certificates", "Blogs", "Tech Cup", "Documentations", "Team 2020-21"]} present={"Hall of Fame"} logo_src={itc}/>
            <Switch>
             <Route path = '/' exact component = {Home}/>
             <Route path = '/home' exact component = {Home}/>
             <Route path = '/techcup' component = {TechScores} />
             <Route path = '/team2020-21' component = {team2020final} />
             <Route path='/events' render={(props) => ( <LatestEvents {...props} heading="Upcoming Events" /> )}/>
             <Route path='/techteams' render={(props) => ( <CardGroup {...props} title="Technical Teams" group = {techteams} /> )}/>
             <Route path='/clubs' render={(props) => ( <CardGroup {...props} title="Clubs" group = {clubs} /> )}/>
             <Route path='/blogs' render={(props) => ( <BlogCardsGroup {...props} title="Blogs" group = {this.state.blogs} /> )}/>

             
            </Switch>
            
            <section>
            {/*<FooterTechCup />*/}

            <FinalFooter />
            <Team2020/>
            </section>
        </div>
        </Router>
        )
        }
}

export default App;