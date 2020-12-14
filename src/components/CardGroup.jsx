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
        <ParallaxProvider
            init={{
                smoothScrollingDuration: 1000,
                smoothScrolling: true,
                forceHeight: false
            }}>
            <Parallax data={data}>
                <div className="container-fluid">
                    <div className="jumbotron rounded" style={{ backgroundColor: "#0B2D5C" }}>
                        <h1 className="display-4" style = {{color:"white",textAlign:"center"}}> {props.title}</h1>
                        <p className="lead" style={{ color: "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
                        <div className="row">

                            {props.group.map(team => (
                                <Card
                                    heading={team.heading}
                                    subheading={team.subheading}
                                    description={team.description}
                                    img={team.img} />
                            ))}

                        </div>
                    </div>
                </div>
            </Parallax>
        </ParallaxProvider>
    )
}

export default CardGroup;