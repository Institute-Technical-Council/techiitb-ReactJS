import React from "react";



import techteams from "../techteams";
import clubs from "../clubs";
import blogs from "../blogs"

import Card from "./Card";
import { ParallaxProvider, Parallax } from "react-skrollr";
import '../style/cardgroup.css';



const data = {
    "data-center-top": "padding: 100px;",
    "data-top-top": "padding: 2px;",
    "data-bottom-bottom": "padding: 2px;",
    "data-center-bottom": "padding: 100px;"
};
function CardGroup(props) {
    return (
     
                <div className="container-fluid cardgroup">
                    <div className="jumbotron rounded" style={{ backgroundColor: "#0B2D5C" }}>
                        <h1 className="display-4" style = {{color:"white",textAlign:"center"}}> {props.title}</h1>
                        <p className="lead" style={{ color: "white" }}>
                        </p>
                        <div className="row">

                            {props.group.map(team => (
                                <Card className="cardd"
                                    heading={team.heading}
                                    subheading={team.subheading}
                                    description={team.description}
                                    img={team.img} />
                            ))}

                        </div>
                    </div>
                </div>
 
    )
}

export default CardGroup;