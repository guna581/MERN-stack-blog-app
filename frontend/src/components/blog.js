import { useParams } from "react-router";
import Header from "./header";
import { useEffect, useState } from "react";
import axios from 'axios';
import Helmet from "react-helmet";
const Blog = ()=>{

    const [pageDetails, setPageDetails] = useState(null);
    let {slug} = useParams();

    const pageData = async ()=>{
        let response = await axios.get('http://localhost:8000/page-data/'+slug);
        console.log(response.data);
        
        setPageDetails(response.data);
    }

    useEffect(()=>{
        pageData()
    }, []);


    return(
        <>
            <Header />     
            {
                pageDetails==null ?  <p Style="text-align:center;">Loading</p> : 
                <>
                <Helmet>
                    <title>{pageDetails.title}</title>
                    <meta name="description" content={pageDetails.title} />
                    <link rel="canonical" href={`http://localhost:3000/blog/${pageDetails.slug}`} />
                </Helmet>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="mb-3">{pageDetails.title}</h1>
                            <div className="text-muted mb-3">
                                <span>by {pageDetails.created_by}</span>
                                <span> Published on: {pageDetails.date_time}</span>
                            </div>

                            <img src="https://via.placeholder.com/800x400" className="img-fluid mb-4" alt="Blog Post Image" />

                            <p className="lead">
                                {pageDetails.content}
                            </p>
                
                        </div>


                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-header">
                                    Recent Posts
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="#">Post One</a></li>
                                    <li className="list-group-item"><a href="#">Post Two</a></li>
                                    <li className="list-group-item"><a href="#">Post Three</a></li>
                                </ul>
                            </div>

                            <div className="card mb-4">
                                <div className="card-header">
                                    Categories
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><a href="#">Category One</a></li>
                                    <li className="list-group-item"><a href="#">Category Two</a></li>
                                    <li className="list-group-item"><a href="#">Category Three</a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </>                
                
            }                
           
        </>
    );
}

export default Blog;