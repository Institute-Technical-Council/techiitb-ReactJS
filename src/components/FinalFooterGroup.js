import React from 'react';
import '../style/finalfooter.css';
import blueitclogo from '../assets/finalfooter/blueitclogo.JPG';
import fb from '../assets/finalfooter/fb.png';
import ig from '../assets/finalfooter/ig.jpeg';

import yt2 from '../assets/finalfooter/yt2.png';
import SearchField from "react-search-field";


function Group1(props) {
    var heading = props.heading;
    var objects = props.content;
    return (
        <div className="group1">
            <img src={blueitclogo} width={"100"} height={"90"}/>







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
                <div className="col centre-stuff">







                    <p style = {{color:"#0B2D5C",fontSize:"1rem",fontWeight:"bold"}}><SearchField
  placeholder="Write an email"

  searchText="Write an email"
  classNames="test-class"
/><br/> <a href={"#"}> <img src={fb} width={"50"} height={"40"}/></a>
                    <a href={"#"}> <img src={ig} width={"55"} height={"50"}/></a>
                        <a href={"#"}> <img src={yt2} width={"45"} height={"5"}/></a><br/>©2020-21 All Rights Reserved. Designed by Institute Technical Council, IIT BOMBAY</p>




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