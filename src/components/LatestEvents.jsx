import React from 'react';
import latest_events from '../latest_events';
import latest_events_style from '../style/latest_events.css';

function LatestEvents(props){
    var heading = props.heading;
    return(
    <div className="container-fluid">
        <div className="events">
        <h1 className= "display-4" style = {{color: "#0B2D5C" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {heading}</h1>
        <div className="row">
            <div id="latest-event" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                { latest_events.map(item=>(
                    <div className={"carousel-item"+item.class} key={item.id}>
                        <div className="row">
                        <div className="col-md-6">
                            <img className="d-block w-100" src={item.image} alt={item.name} />
                        </div>
                        <div className="col-md-6">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="date-conetiner">
                                <div className="calendar">
                                    <span className="far fa-calendar-alt"></span>
                                </div>
                                <div className="date">
                                    {item.date} <br/>
                                    {item.time}
                                </div>
                            </div>
                            <div className="register">
                                <a className="btn btn-secondary  latest-event" href={item.register_link}>Register</a>
                            </div>  
                        </div>
                        </div>
                    </div>
                ))}
                </div>
                <ol className="carousel-indicators">
            
                    { latest_events.map(item=>(
                        <li data-target="#latest-event" data-slide-to={item.id} key={item.id} className={item.class}></li>
                    ))}
                </ol>
            </div> 
        </div>
        </div>
    </div>
    )
}

export default LatestEvents;