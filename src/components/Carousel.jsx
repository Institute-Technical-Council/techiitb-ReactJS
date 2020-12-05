import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from "../carousel";
import '../style/carousel.css';
import NavBar from "./NavBar";
import itc from "../assets/itcwhite.png"



function CarouselHome() {
    return (
            <div >
                <Carousel interval={2000}>
                <NavBar nav_items={["Home","Documentations","Hall of Fame"]} present={"Hall of Fame"} logo_src={itc}/>
                    {data.map(item => (
                        <Carousel.Item>
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
                                <h2>{item.subheading}</h2>
                                <h1>{item.heading}</h1>
                              
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
       
    )
}

export default CarouselHome;