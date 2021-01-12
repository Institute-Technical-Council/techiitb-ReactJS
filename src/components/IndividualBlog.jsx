import React from 'react';
import '../style/individualblog.css'

function IndividualBlog() {
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
                    <h3>TOPIC OF THE BLOG</h3>
                    <img src = 'https://picsum.photos/400/400' height = "200px"></img>
                    <h4> Donald Trump</h4>
                    <h5> IITB 2000</h5>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p> Sed ut perspiciatis unde omnis ist natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                    <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    

                                    </div>
            </div>
        </div>
    )}

    export default IndividualBlog;