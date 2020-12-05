import React from 'react';

function Card(props) {
    return (
            <div className="col-md-4 col-lg-3 card-container" style={{textAlign: "center" ,padding: "15px" }}>
                {/* <div className="card-flip"> */}

                    <div className="card rounded-cards"  >
                    <img src={props.img} class="card-img-top img-fluid" alt="..." style = {{padding: "-12px"}} />
                        <hr></hr>
                        <div className="card-body" >
                            <h4 className="card-title">{props.heading}</h4>
                            
                            <h6 className="card-text" >{props.subheading}
                            </h6>
                            
                        </div>
                    </div>
                    {/* <div className="card back" >
                    <div className="card-body">
                            <h3 className="card-title">{props.heading}</h3>
                            
                            <p className="card-text">{props.description}
                            </p>
                            <a href="#" class="card-link">Know More</a>
                        </div>
                        </div> */}
                {/* </div> */}
            </div>
       


    )
}

export default Card;