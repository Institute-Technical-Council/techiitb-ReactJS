import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from "../carousel";
import '../style/carousel.css';
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"



function CarouselHome() {
    return (
            <div className="carousel-margins">
                <Carousel interval={2000}>
                
                    {data.map(item => (

                        <Carousel.Item>
                        {/* <NavBar nav_items={["Home","Events","Certificates", "Blogs", "Clubs", "Tech Teams", "IITB Corner", "Documentations", "Team 2020-21"]} present={"Hall of Fame"} logo_src={itc}/> */}
                            <img
                                className="d-block carousel-img"
                                style = {{opacity : "100%"}}
                                
                                src={item.img}
                                alt={item.heading}
                            />
                            <img className="inside-image" 
                                src={item.i}

                            />
                            <Carousel.Caption className="carousel-caption">
                                <p className="hh1">{item.subheading}</p>
                                <p className="hh2">{item.heading}</p>
                              
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
       
    )
}

export default CarouselHome;