import React from 'react';
import teamgsta from '../teamgsta'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gsta(props) {
    return (


            <div className="row" style={{marginTop: "25px"}}>
            <div className="col-md-4 offset-4 card-container" style={{textAlign: "center" }}>

                    <div className="card rounded-cards"  >
                    <img src={props.img} className="card-img-top img-fluid" alt="..." />

                        <div className="card-body" >
                            <h4 className="card-title">{props.heading}</h4>

                            <h6 className="card-text" >{props.subheading}
                            </h6>

                        </div>
                    </div>

            </div>
            </div>



    )
}

export default Gsta;
