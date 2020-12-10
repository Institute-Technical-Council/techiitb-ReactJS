import React from 'react';
import '../style/finalfooter.css';
import blueitclogo from '../assets/finalfooter/blueitclogo.JPG';
import social from '../assets/finalfooter/social.JPG'


function Group1(props) {
    var heading = props.heading;
    var objects = props.content;
    return (
        <div className="group1">
            <img src={blueitclogo} width={"300"}/>



            {objects.map(function (object, i) {
                return (
                    <div className="row">


                            {object}

                    </div>


                );
            })}
        </div>
    )
}



function Group3(props) {
    return (
        <div className="group3">
            <div className="row">
                <div className="col">
                    <img src={social} width={"100"}/><br/>

                    <b>  © 2021 Rights Reserved. Designed by Institute Technical Council, IIT BOMBAY</b><br/>
                    <b> Email at itcwebteamiitb@gmail.com</b>




                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h6>

                </h6>
                </div>
            </div>
        </div>
    )
}

function Group4(props) {
    var heading = props.heading;
    var objects = props.content;
    return (
        <div className="group4">
            <div className="row">
                <div className="col">
                    <h4>{heading}</h4>
                </div>
            </div>
            <div className="row">
                {objects.map(function (object, i) {
                    return (
                        <div className="col">
                            <h6>
                                {object}
                            </h6>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export { Group1, Group3, Group4 };