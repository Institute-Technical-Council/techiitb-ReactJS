import React from 'react';
import values from '../counter_values';
import Counter from './Counter';

function CounterContainer(props){
    var heading = props.heading;
    var subheading = props.subheading;
    
    return(
    <div className="container-fluid service" style = {{padding : "100px"}} >
        <div className = "jumbotron rounded" style = {{backgroundColor : "#0B2D5C"}} >
        <h1 className = "display-4" style = {{color: "white" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {heading}</h1>
            <p className = "centre" style = {{color: "white"}}>{subheading}</p>
            <div className="row">
            { values.map(item => (
                <Counter value = {item.value} description = {item.description} key={item.id}/>
            ))}
            </div>
        </div>
    </div>
    )
}

export default CounterContainer;