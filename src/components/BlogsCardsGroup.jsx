import React from "react";


import blogs from "../blogs"
import BlogCards from "./BlogsCards";
import { ParallaxProvider, Parallax } from "react-skrollr";





const data = {
    "data-center-top": "padding: 100px;",
    "data-top-top": "padding: 2px;",
    "data-bottom-bottom": "padding: 2px;",
    "data-center-bottom": "padding: 100px;"
  };
function BlogCardsGroup(props){
    return(
        <ParallaxProvider
        init={{
            smoothScrollingDuration: 1000,
            smoothScrolling: true,
            forceHeight: false
          }}>
         <Parallax data = {data}>
        <div className="container-fluid">
        <div class = "jumbotron rounded" style = {{backgroundColor : "white"}} >
            <h1 class = "display-4" style = {{color: "#0B2D5C" ,fontFamily: 'Bebas Neue', textAlign: 'center'}}> {props.title}</h1>

            <div className="row">

                {props.group.map(team => (
                    <BlogCards
                        heading={team.heading}
                        subheading={team.subheading}
                        description={team.description}
                        img={team.img} />
                ))}

            </div>
        </div>
        </div>
        </Parallax>
        </ParallaxProvider>
    )
}

export default BlogCardsGroup;