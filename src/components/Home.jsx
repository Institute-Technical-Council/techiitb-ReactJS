import React from 'react';
// import Team2020 from '../team2020';

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


import BarGraph from './BarGraphTechCup';
import Pie from './PieChart';
import TechScores from './TechScores'
import FooterTechCup from './FooterTech';

class Home extends React.Component{
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
        return       <div>
                <CarouselHome />
                <LatestEvents heading={"Upcoming Events"} />
                <CardGroup title="Clubs" group={clubs}/>
                <BlogCardsGroup title="Blogs" group={this.state.blogs}/>
                <CardGroup title="Technical Teams" group = {techteams}/>
        </div>
    }

}
export default  Home;