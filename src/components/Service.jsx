import React from 'react';
import services from '../services';
import '../style/services.css';

function Services(props) {
    var heading = props.heading;
    var subheading = props.subheading;
    return(
        <div className="container-fluid service" style = {{padding : "100px"}} >
        <div className = "jumbotron rounded" style = {{backgroundColor : "#0B2D5C"}} >
            <h1 className = "display-4" style = {{color: "white" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {heading}</h1>
            <p className = "centre" style = {{color: "white"}}>{subheading}</p>
            <div className="row">
            {
                services.map(service => (
                    <div className="col-md-4" key={service.id}>
                        <div className="step text-center">
            <div className="step-shape shape-light organic-radius mb-4">
                <span className="icon-primary"><span className={service.icon}></span></span>
            </div>
                <h5 className="step-title">{service.heading}</h5>
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
