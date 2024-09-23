import { Link } from "react-router-dom";

const SingleBlog = ({blog})=>{
    return(
        <>
            <div class="blog-post">
                <img src="https://via.placeholder.com/800x400" alt="Post Image" />
                <h2 class="mt-3">{blog.title}</h2>
                <p class="text-muted">Published on {blog.date_time} by {blog.created_by}</p>
                <p>{blog.content}</p>                
                <Link to={`/blog/${blog.slug}`} class="btn btn-primary">Read More</Link>
            </div>  
        </>
    );
}

export default SingleBlog;