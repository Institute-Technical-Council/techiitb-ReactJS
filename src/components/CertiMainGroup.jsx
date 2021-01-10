import React from "react";



import techteams from "../techteams";
import clubs from "../clubs";
import blogs from "../blogs"
import certi_main from "../certi_main";

import CertiMaiin from "./CertiMain";
import { ParallaxProvider, Parallax } from "react-skrollr";
import '../style/cardgroup.css';
import CertiMain from "./CertiMain";




const data = {
    "data-center-top": "padding: 100px;",
    "data-top-top": "padding: 2px;",
    "data-bottom-bottom": "padding: 2px;",
    "data-center-bottom": "padding: 100px;"
};
function CertiMainGroup(props) {
    return (


        <div className="container">
            <div className="jumbotron rounded" style={{ backgroundColor: "white" }}>
                <h1 className="display-4" style={{ color: "#0B2D5C", textAlign: "center" }}> {props.title}</h1>
                <p className="lead" style={{ color: "#0B2D5C" }}>Certificates are available for the following
                </p>
                <div className="row">

                    {props.group.map(team => (
                        <CertiMain
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

export default CertiMainGroup;