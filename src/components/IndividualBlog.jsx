import React, { useEffect, useState } from 'react';
import '../style/individualblog.css'
import fb_blue from '../assets/blogs/fb_blue.png'
import fb_white from '../assets/blogs/fb_white.png'
import li from '../assets/blogs/li.png'
import tw from '../assets/blogs/tw.png'
import wa from '../assets/blogs/wa.png'
import { Helmet } from "react-helmet";



import {
    FacebookShareButton, FacebookIcon, WhatsappShareButton, WhatsappIcon, TwitterShareButton, TwitterIcon,
    LinkedinShareButton, LinkedinIcon
} from "react-share";




import ReactDOMServer from 'react-dom/server';
var HtmlToReactParser = require('html-to-react').Parser;





function IndividualBlog({ match }) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    }, []);
    // 
    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://www.tech-iitb.org/api/v1/blogs/${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item)
            ;

    }
    // Attempt to convert string to HTML
    var htmlInput = item.content;
    var htmlToReactParser = new HtmlToReactParser();
    var reactElement = htmlToReactParser.parse(htmlInput);
    var reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);
    // console.log(typeof item.content)
    // console.log(typeof reactHtml)
    // console.log(reactElement)
    // assert.equal(reactHtml, htmlInput);
    console.log(window.location.href)
    return (
        <div class="row">
            <Helmet>
                <title>Hello?</title>
                <meta property="og:title" content={item.title} />
                {/* <meta property="og:url" content="http://www.yourdomain.com" /> */}
                <meta property="og:description" content={item.short_description} />
                <meta property="og:image" content={item.cover_img} />
                <meta property="og:image:width" content="50" />
                <meta property="og:image:height" content="50" />
                <meta name="twitter:title" content={item.title} />
                {/* <meta property="og:url" content="http://www.yourdomain.com" /> */}
                <meta name="twitter:description" content={item.short_description} />
                <meta name="twitter:image" content={item.cover_img} />
                <meta property="og:type" content="website" />
            </Helmet>
            <div class="col-md-2 navigation">
                <div class="input-group mb-3 search">
                    <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon2" ><i class="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div class="all">
                    <a href="">Aerospace Engineering</a> <br />
                    <a href="">Aerospace Engineering</a> <br />
                    <a href="">Aerospace Engineering</a> <br />
                    <a href="">Aerospace Engineering</a> <br />
                </div>
            </div>
            <div class="col-md-10 blog">
                <div class="main container">
                    <h3>{item.title}</h3>
                    <img className='cover-img' src={item.cover_img} height="200px"></img>
                    <h4> {item.author}</h4>
                    <h5> {item.short_description}</h5>
                    <p style={{ textAlign: "left", margin: "2px 2px" }}>{reactHtml}</p>
                    <div className="social">
                        {/* <img className = 'social-share' src = {fb_blue}></img>
                        <img className = 'social-share' src = {tw}></img>
                        <img className = 'social-share' src = {li}></img>
                        <img className = 'social-share' src = {wa}></img> */}
                        <FacebookShareButton
                            url={`https://www.tech-iitb.org/blogs/${match.params.id}`}
                            quote={item.title}
                            hashtag="#blog">
                            <FacebookIcon size={36} />
                        </FacebookShareButton>
                        <WhatsappShareButton
                            url={`https://www.tech-iitb.org/blogs/${match.params.id}`}
                            title={item.title}
                            separator=":: "

                        >
                            <WhatsappIcon size={36} />
                        </WhatsappShareButton>
                        <TwitterShareButton
                            url={`https://www.tech-iitb.org/blogs/${match.params.id}`}
                            quote={item.title}
                            hashtag="#blog"

                        >
                            <TwitterIcon size={36} />
                        </TwitterShareButton>
                        <LinkedinShareButton
                            url={`https://www.tech-iitb.org/blogs/${match.params.id}`}
                            source={`https://www.tech-iitb.org/blogs/${match.params.id}`}
                            title={item.title}
                            summary={item.short_description}



                        >
                            <LinkedinIcon size={36} />
                        </LinkedinShareButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualBlog;


// className={classes.socialMediaButton}