import { useEffect, useState } from "react";
import Header from "./header";
import SingleBlog from "./singleBlog";
import axios from 'axios';
import { Helmet } from "react-helmet";

const Home = ()=>{

    const [blogLists, setBlogLists] = useState([]);
    
    const blogData = async ()=>{
        let response = await axios.get('http://localhost:8000/blog-list'); 
        setBlogLists(response.data);
    }

    useEffect(()=>{
        blogData();
    },[]);

    return(
        <>  
                <Helmet>
                    <title>Blogs</title>
                    <meta name="description" content="All Blogs Page" />
                </Helmet>
            <Header />                         
            <div class="container mt-5">
                <div class="row">                    
                    <div class="col-lg-8">
                    {
                        blogLists.map((blog) => <SingleBlog blog={blog} /> )
                    }                                                               
                    </div>
                    
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-header">
                                Recent Posts
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><a href="#">Post One</a></li>
                                <li class="list-group-item"><a href="#">Post Two</a></li>
                                <li class="list-group-item"><a href="#">Post Three</a></li>
                            </ul>
                        </div>                
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;