import React from 'react';
import '../style/aeroblogs.css'
import aeroblogs from '../AeroBlogsData.js';
import BlogCards from './BlogsCards';
import bg from '../assets/aero/blogbg.jpg'

function AeroBlogs() {
    return (
        <div style = {{padding: "5% 15% "}} className = "background">
      
            <h1 style = {{color:"white"}}> The Wall of Blogs</h1>
            <div class = "row">
            {aeroblogs.map(blog => (    
               
                <div class="col-lg-4 col-md-6 card bg-dark" style={{width: "18rem", textAlign:"center"}}>
                <img class="card-img-top" src={blog.img} alt="Card image cap" />
                <div class="card-body">

                <div>    <h4 class="card-title" style = {{color:"white"}}>{blog.heading}</h4></div>
                    <p style = {{fontSize: "1rem",lineHeight:"20px",color:"white"}}class="card-text">{blog.subheading}</p>
                </div>
            </div>
            ))}

            </div>
           
        </div>
    )
}

export default AeroBlogs;