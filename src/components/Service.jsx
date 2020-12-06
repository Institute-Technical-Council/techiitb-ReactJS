import React from 'react';
import services from '../services';
import '../style/services.css';

function Services(props) {
    var heading = props.heading;
    var subheading = props.subheading;
    return(
        <div className="container-fluid service" style = {{padding : "100px"}} >
        <div class = "jumbotron rounded" style = {{backgroundColor : "#0B2D5C"}} >
            <h1 class = "display-4" style = {{color: "white" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {heading}</h1>
            <p class = "centre" style = {{color: "white"}}>{subheading}</p>
            <div className="row">
            {
                services.map(service => (
                    <div className="col-md-4">
                        <div class="step text-center">
            <div class="step-shape shape-light organic-radius mb-4">
                <span class="icon-primary"><span class={service.icon}></span></span>
            </div>
                <h5 class="step-title">{service.heading}</h5>
                <p>{service.description}</p>
        </div>
                    </div>
                ))
            }
            </div>
        </div>
        </div>
    )
}

export default Services;
