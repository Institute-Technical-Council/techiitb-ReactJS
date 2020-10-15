import React from 'react';
import '../style/footer.css'

function Group1 (props) {
    return (
        <div className="group1">
            <div className="row">
                <h4>Explore</h4>
            </div>
            <br />
            <div className="row">
                <h6>
                    Mission
                </h6>
            </div>
            <div className="row">
                <h6>
                    Clubs and Teams
                </h6>
            </div>
            <div className="row">
                <h6>
                    Documentations
                </h6>
            </div>
            <div className="row">
                <h6>
                    Careers
                </h6>
            </div>
        </div>
    )
}

function Group2 (props) {
    return (
        <div className = "group2">
            <div className="row">
                <h4>
                    Developed by
                </h4>
            </div>
            <div className="row">
                <h6>
                    Web Team, ITC 2020-21
                </h6>
            </div>
            <br />
            <div className="row">
                <h6>
                    Contact developers at
                </h6>
            </div>
            <div className="row">
                <h6>
                    itcwebteamiitb@gmail.com
                </h6>
            </div>
        </div>
    )
}

function Group3 (props) {
    return (
        <div className="group3">
            <div className="row">
            <div className="col">
                <h4>
                    Tech@IITB
                </h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h6>
                    All Rights Reserved
                </h6>
                </div>
            </div>
        </div>
    )
}

function Group4 (props) {
    return (
        <div className="group4">
            <div className="row">
                <div className="col">
                <h4>
                    Contact
                </h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h6>
                        Facebook
                    </h6>
                </div>
                <div className="col">
                    <h6>
                        Instagram
                    </h6>
                </div>
            </div>
        </div>
    )
}

export {Group1, Group2, Group3, Group4};