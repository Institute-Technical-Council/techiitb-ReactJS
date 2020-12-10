import React from 'react';
import fb from '../assets/fb_3.png'
import ig from '../assets/ig.png'
import linkdin from '../assets/linkedin.png'
import yt from '../assets/yt.png'
import '../style/footertech.css';
function FooterTechCup(){
    return(
        <div class = "conatiner" style = {{backgroundColor: "#0B2D5C",marginBottom:"-20px",textAlign:"center",padding:"2% 0%"}}>
        <div class = "container">
            <img src = {fb}>
            </img>
            <img src = {ig}>
            </img>
            <img src = {linkdin}>
            </img>
            <img src = {yt}>
            </img>
        </div>
        <p style = {{color:"white",fontSize:"1rem",fontWeight:"bold"}}> 2020-21 All Rights Reserved. Designed by Institute Technical Council, IIT Bombay</p>

        </div>
    )
}

export default FooterTechCup;