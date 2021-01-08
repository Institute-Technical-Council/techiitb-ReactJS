import React from "react";

import blogs from "../blogs"
import BlogCards from "./BlogsCards";
import { ParallaxProvider, Parallax } from "react-skrollr";





const data = {
    "data-center-top": "padding: 100px;",
    "data-top-top": "padding: 6px;",
    "data-bottom-bottom": "padding: 2px;",
    "data-center-bottom": "padding: 100px;"
};
function BlogCardsGroup(props) {
    return (

        <div className="container-fluid">
            <div class="jumbotron rounded" style={{ backgroundColor: "white" }} >
                <h1 class="display-4" style={{ color: "#0B2D5C", fontFamily: 'Bebas Neue', textAlign: 'center' }}> {props.title}</h1>


                <div className="row">

                    {props.group.map(blog => (
                        <BlogCards
                            heading={blog.title}
                            subheading={blog.author + "/" + blog.category}
                            description={blog.short_description}
                            img={blog.cover_img} 
                            link={blog.link}
                            />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default BlogCardsGroup;