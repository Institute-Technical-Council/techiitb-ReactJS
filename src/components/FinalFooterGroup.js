import React from 'react';
import '../style/finalfooter.css';

import fb from '../assets/finalfooter/fb.png';
import ig from '../assets/finalfooter/ig.jpeg';

import yt2 from '../assets/finalfooter/yt2.png';
import SearchField from "react-search-field";



function Group3(props) {
    return (
        <div>
            
            <div className="row s-row">
                <div className="col">
                    LEARNING NEVER STOPS
                </div>
            </div>
            <div className="row w">
                <div className="col">
                    <SearchField placeholder="Write an email" searchText="Write an email" classNames="test-class" />
                </div>
            </div>
            {/*
            <div className="row w">
                <div className="col s-row">
                    <a href={"#"}> <img src={fb} width={"50"} height={"40"} /></a>
                    <a href={"#"}> <img src={ig} width={"55"} height={"50"} /></a>
                    <a href={"#"}> <img src={yt2} width={"45"} height={"5"} /></a>
                </div>
            </div>
            */}
            <div className="row w">
                <div className="col">
                    © 2020-21 All Rights Reserved.
                    <br />
                    Designed by Institute Technical Council, IIT BOMBAY
                </div>
            </div>
        </div>
    )
}

export { Group3 };