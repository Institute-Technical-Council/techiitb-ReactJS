import React from 'react';
import gsta from "./gsta";
import team2 from "./team2";
import team3 from "./team3";

import teamgsta from '../teamgsta';
import team_2 from '../team_2';
import team_3 from '../team_3';


function Team2020() {

  return (
      <div>
        {
          teamgsta.map(item =>(
            <gsta img={item.img} heading={item.heading} subheading={item.subheading}/>
          ))
        }
        {
        team_2.map(item =>(
          <team2 img={item.img} heading={item.heading} subheading={item.subheading}/>
        ))
        }
        {
        team_3.map(item =>(
          <team3 img={item.img} heading={item.heading} subheading={item.subheading}/>
        ))
        }
      </div>
  );
}

export default Team2020;