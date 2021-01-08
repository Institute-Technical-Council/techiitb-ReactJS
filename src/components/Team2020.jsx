import React from 'react';
import Gsta from "./Gsta";
import Team2 from "./Team2";
import Team3 from "./Team3";

import teamgsta from '../teamgsta';
import team_2 from '../team_2';
import team_3 from '../team_3';


function Team2020() {

  return (
      <div className="container">
        {
          teamgsta.map(item =>(
            <Gsta img={item.img} heading={item.heading} subheading={item.subheading}/>
          ))
        }
        {
        team_2.map(item =>(
          <Team2 img={item.img} heading={item.heading} subheading={item.subheading}/>
        ))
        }
        {
        team_3.map(item =>(
          <Team3 img={item.img} heading={item.heading} subheading={item.subheading}/>
        ))
        }
      </div>
  );
}

export default Team2020;