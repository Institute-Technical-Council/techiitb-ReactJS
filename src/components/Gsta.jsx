import React from 'react';
import teamgsta from '../teamgsta'

function Gsta(props) {
    return (
            <div className="col-md-4 col-lg-3 card-container" style={{textAlign: "center" }}>

                    <div className="card rounded-cards"  >
                    <img src={props.img} class="card-img-top img-fluid" alt="..." />
                        <hr></hr>
                        <div className="card-body" >
                            <h4 className="card-title">{props.heading}</h4>

                            <h6 className="card-text" >{props.subheading}
                            </h6>

                        </div>
                    </div>
                    
            </div>



    )
}

export default Gsta;