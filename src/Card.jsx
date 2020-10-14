import React from 'react';
import ReactDOM from 'react-dom';

function Card(props) {
    return (
            <div className="col-md-6  card-container" style={{textAlign: "center" ,padding: "12px" }}>
                <div className="card-flip">

                    <div className="card front"  >
                    <img src={props.img} class="card-img-top img-fluid" alt="..." style = {{padding: "-12px"}} />
                        <div className="card-body">
                            <h3 className="card-title">{props.heading}</h3>
                            
                            <h5 className="card-text">{props.subheading}
                            </h5>
                            
                        </div>
                    </div>
                    <div className="card back" >
                    <div className="card-body">
                            <h3 className="card-title">{props.heading}</h3>
                            
                            <p className="card-text">{props.description}
                            </p>
                            <a href="#" class="card-link">Know More</a>
                        </div>
                        </div>
                </div>
            </div>
       


    )
}

export default Card;