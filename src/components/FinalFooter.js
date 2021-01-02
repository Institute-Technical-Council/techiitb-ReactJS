import React from 'react';
import '../style/finalfooter.css'
import blueitclogo from '../assets/finalfooter/itc-blue.png';
import {Group3} from '../components/FinalFooterGroup'

function FinalFooter(props) {
    
    return (
        <div className="container-fluid f">
        <div className="row">
                <div className="col logo-row">
                    <img className="imgg" src={blueitclogo}/>
                </div>
            </div>
            <div className="row centre-stuff">
                <Group3 />
            </div>
        </div>
    )

}

export default FinalFooter;