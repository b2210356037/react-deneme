const Navbar  = () => {
    return (
        <nav>
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home </a>
                <a href="/about">About </a>
                <a href="/create">New Blog </a>
            </div>
        </nav>
    );
}

export default Navbar;