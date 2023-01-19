import "./product.css";

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary d-flex justify-content-around">
            <a class="name navbar-brand" href="#">PLSquared</a>
            <input className="form-control search" placeholder="Search your item" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <button className="btn btn-secondary">
                <i className="icon fa-solid fa-cart-shopping">
                    <div className="badge bg-body-tertiary text-dark cart-value">0</div>
                </i></button>
            <button className="btn button">LOGIN</button>
        </nav>
    )
}

export default NavBar;