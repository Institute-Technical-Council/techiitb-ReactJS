import React from "react";
import techteams from "../techteams";
import clubs from "../clubs";
import blogs from "../blogs"

import Card from "./Card";

function CardGroup(props){
    return(
        <div className="container-fluid" style = {{padding : "100px"}} >
        <div class = "jumbotron rounded" style = {{backgroundColor : "#0B2D5C"}} >
            <h1 class = "display-4" style = {{color: "white" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {props.title}</h1>
            <p class = "lead" style = {{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
    )
}

export default CardGroup;