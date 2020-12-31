import React from 'react';
import '../style/finalfooter.css'
import { Group1, Group3, Group4 } from '../components/FinalFooterGroup'
import  blueitclogo from  '../assets/finalfooter/blueitclogo.JPG'
import SearchField from "react-search-field";

function FinalFooter(props) {
    var heading_of_group1 = "";
    var content_of_group1 = ["LEARNING NEVER STOPS"];
    var heading_of_group4 = "";
    var content_of_group4 = ["", "", ""];
    return (
        <div className="container-fluid">
            <div className="row footer">
                
                <div className="col-md-3 sm-3">
                    <Group1 heading={heading_of_group1} content={content_of_group1} />
                </div>
                <div className="col-md-3 sm-3">
                    
                    <div className="row">
                        <Group4 heading={heading_of_group4} content={content_of_group4} />
                    </div>
                </div>
            </div>
            <div className="row centre-stuff">
                <Group3 />
            </div>
        </div>
    )
}

export default FinalFooter;