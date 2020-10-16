import React from "react";
import techteams from "../techteams";
import Card from "./Card";

function CardGroup(){
    return(
        <div class="container">
            <div className="row">
                {techteams.map(team => (
                    <Card
                        heading={team.heading}
                        subheading={team.subheading}
                        description={team.description}
                        img={team.img} />
                ))}
            </div>
        </div>
    )
}

export default CardGroup;