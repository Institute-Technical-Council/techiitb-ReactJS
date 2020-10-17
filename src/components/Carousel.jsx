import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import data from "../carousel";

function CarouselHome() {
    return (
        <div style={{ padding: "20px" }}>
            <div class="container shadow p-3 mb-5 bg-white rounded" >
                <Carousel interval={2000}>
                    {data.map(item => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100 rounded"
                                src={item.img}
                                alt={item.heading}
                            />
                            <Carousel.Caption>
                                <h3>{item.heading}</h3>
                                <p>{item.sub}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default CarouselHome;