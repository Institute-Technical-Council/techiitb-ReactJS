import React from 'react';
import '../style/footer.css'
import { Group1, Group2, Group3, Group4 } from '../components/FooterGroups'

function Footer(props) {
    var heading_of_group1 = "Explore";
    var content_of_group1 = ["Mission", "Clubs and Team", "Documentations", "Careers"];
    var heading_of_group4 = "Contact";
    var content_of_group4 = ["Facebook", "Instagram", "LinkedIn"];
    return (
        <div className="container-fluid">
            <div className="row footer">
                <div className="col-md-3 sm-3">
                    <h1>ITC Logo</h1>
                </div>
                <div className="col-md-3 sm-3">
                    <Group1 heading={heading_of_group1} content={content_of_group1} />
                </div>
                <div className="col-md-3 sm-3">
                    <Group2 />
                </div>
                <div className="col-md-3 sm-3">
                    <div className="row">
                        <Group3 />
                    </div>
                    <div className="row">
                        <Group4 heading={heading_of_group4} content={content_of_group4} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;