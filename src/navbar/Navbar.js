import img1 from '../images/magnifying-glass.svg';
import watch from '../images/youtubelogo.svg';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid navbar-expand">
                    <a className="navbar-brand" href="#"><img className="logo" src={watch}></img> YouTube</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn" type="submit">
                        <img className="img" src={img1}></img>
                        </button>
                    </form>
                    <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Sign in</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Sign up</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;