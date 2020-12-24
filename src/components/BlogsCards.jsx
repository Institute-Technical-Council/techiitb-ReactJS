import React from 'react';
import blogs from '../style/blogs.css';

function BlogCards(props) {
    return (
            <div className="col-md-4 col-lg-3 card-container" style={{textAlign: "center" ,padding: "30px" }}>
                {/* <div className="card-flip"> */}

                    <div className="card rounded-cards"  >

                        <div className="card-body" >
                            <h4 className="card-title">{props.heading}</h4>

                            <h6 className="card-text" >{props.subheading}
                                <img src={props.img} className="card-img-top img-fluid" alt="..."
                                     style={{padding: "-12px"}}/>
                                <hr></hr>
                            </h6>
                            <h6 className="card-text" >{props.description}</h6>

                        </div>
                    </div>
                    {/* <div className="card back" >
                    <div className="card-body">
                            <h3 className="card-title">{props.heading}</h3>

                            <p className="card-text">{props.description}
                            </p>
                            <a href="#" class="card-link">Know More</a>
                        </div>
                        </div> */}
                {/* </div> */}
            </div>



    )
}

export default BlogCards;