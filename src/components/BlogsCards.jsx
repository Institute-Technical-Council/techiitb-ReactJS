import React from 'react';
import '../style/blogs.css';

function BlogCards(props) {
    return (
            <div className="col-md-4 col-lg-3 card-container" style={{textAlign: "center" ,padding: "30px"}}>
                {/* <div className="card-flip"> */}
                    <a href={props.link}>
                    <div className="card rounded-cards shadow-lg"  >
                        
                        <div className="card-body" >
                            <h4 className="card-title">{props.heading}</h4>

                            <h7 className="card-text" >{props.subheading}
                                <img src={props.img} className="card-img-top img-fluid" alt="..."
                                     style={{padding: "-12px"}}/>
                                <hr></hr>
                            </h7>
                            <h6 className="card-text" >{props.description}</h6>


                        </div>
                    </div>
                    </a>
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