import React from 'react';
import team_2 from "../team_2";

function team2(props) {
    return (
        <div className ="row">
            <div className="col-md-4 card-container" style={{textAlign: "center" ,padding: "30px" }}>

                    <div className="card rounded-cards"  >
                    <img src={props.img} class="card-img-top img-fluid" alt="..." style = {{padding: "-12px"}} />
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

export default team2