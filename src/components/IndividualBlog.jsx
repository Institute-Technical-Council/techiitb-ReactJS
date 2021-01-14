import React,{useEffect,useState} from 'react';
import '../style/individualblog.css'

import ReactDOMServer from 'react-dom/server';
var HtmlToReactParser = require('html-to-react').Parser;

function IndividualBlog({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match);
    },[]);
    // 
    const [item,setItem] = useState({});

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

    return (
        <div class = "row">
            <div class = "col-md-2 navigation">
                <div class="input-group mb-3 search">
                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2" ><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>
            </div>
            <div class = "all">
                <a href = "">Aerospace Engineering</a> <br />
                <a href = "">Aerospace Engineering</a> <br />
                <a href = "">Aerospace Engineering</a> <br />
                <a href = "">Aerospace Engineering</a> <br />
            </div>  
            </div>
            <div class = "col-md-10 blog">
                <div class = "main container">
                    <h3>{item.title}</h3>
                    <img src = {item.cover_img} height = "200px"></img>
                    <h4> {item.author}</h4>
                    <h5> {item.short_description}</h5>
                    
                      <p style = {{textAlign :"left",margin:"2px 2px"}}>{reactHtml}</p>

                                    </div>
            </div>
        </div>
    )}

    export default IndividualBlog;