import React from 'react';

function Counter(props){
    var value = props.value;
    var description = props.description;
    return(
        <div className="col-md-2">
            <h1 class = "display-4" style = {{color: "white" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {value}</h1>
            <p class="centre">{description}</p>
        </div>
    )
}

export default Counter;