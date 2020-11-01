import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from "../carousel";

function CarouselHome() {
    return (
            <div >
                <Carousel interval={2000}>
                    {data.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block carousel-img"
                                style = {{opacity : "95%"}}
                                
                                src={item.img}
                                alt={item.heading}
                            />
                            
                            <Carousel.Caption>
                                
                                <h1 className = "animation size" >{item.heading}</h1>
                              
                            </Carousel.Caption>
                            
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
       
    )
}

export default CarouselHome;