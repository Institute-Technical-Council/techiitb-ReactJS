import React,{useState,useEffect} from 'react'; 
import blogs from "../blogs"
import BlogCards from "./BlogsCards";
import { ParallaxProvider, Parallax } from "react-skrollr";




function BlogCardsGroup(props) {
    useEffect(() => {
        fetchItem();
        // console.log(match);
        console.log("Hello")
        // console.log(item)
    },[]);
    // 
    const [item,setItem] = useState([]);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://www.tech-iitb.org/api/v1/blogs/`);
        const item = await fetchItem.json();
        setItem(item)
         ;
    }
    console.log(item)




const data = {
    "data-center-top": "padding: 100px;",
    "data-top-top": "padding: 6px;",
    "data-bottom-bottom": "padding: 2px;",
    "data-center-bottom": "padding: 100px;"
};

    return (

        <div className="container-fluid">
            <div class="jumbotron rounded" style={{ backgroundColor: "white" }} >
                <h1 class="display-4" style={{ color: "#0B2D5C", fontFamily: 'Bebas Neue', textAlign: 'center' }}> {props.title}</h1>


                <div className="row">

                    {item.map(data => (
                        <BlogCards
                            heading={data.title}
                            subheading={data.author + "/" + data.category}
                            description={data.short_description}
                            img={data.cover_img} 
                            link={`/blogs/${data.id}`}
                            />
                    ))}

                </div>
            </div>
        </div>

    )
}

export default BlogCardsGroup;