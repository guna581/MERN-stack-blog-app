import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <>
            <header class="bg-dark text-white py-3">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <h1 class="h3">Blogs</h1>
                        <nav>
                          <Link to="/" className="text-white mx-2">Home</Link>
                          <Link to="/blog/6546" className="text-white mx-2">Blogs</Link>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;