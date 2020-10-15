import React from 'react';
import '../style/footer.css'
import {Group1, Group2, Group3, Group4} from '../components/FooterGroups'

function Footer(props) {

    return (

        <div className="row footer">
            <div className="col-md-3 sm-3">
            <h1>ITC Logo</h1>
            </div>
            <div className="col-md-3 sm-3">
                <Group1 />
            </div>
            <div className="col-md-3 sm-3">
                <Group2 />
            </div>
            <div className="col-md-3 sm-3">
                <div className="row">
                    <Group3 />
                </div>
                <div className="row">
                    <Group4 />
                </div>
            </div>
        </div>

    )
}

export default Footer;