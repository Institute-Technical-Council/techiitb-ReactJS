import React from 'react';
import teamgsta from "./teamgsta";
import team_2 from "./team_2";
import team_3 from "./team_3";



let items=['GSTA','Nominees','Managers'];
let itemList=[];
items.forEach((item,index)=>{
  itemList.push( <li key={index}>{item}</li>)
})
function team2020() {

  return (
      <div>
      <teamgsta />
      <team_2 />
      <team_3 />
      </div>




  );
}

export default team2020;