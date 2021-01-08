import React from 'react';
import team_2 from "../team_2";

function Team2(props) {
    return (
        <div className ="row"  style = {{marginTop: "25px"}}>
            <div className="col-md-4 card-container" style={{textAlign: "center" }}>

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
        </div>



    )
}

export default Team2;