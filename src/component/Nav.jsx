
function Nav() {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-md navbar-light fixed-top border-bottom" style={{ backgroundColor: "#F8F7F8" }}>
        <div className="container-xxl">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav flex-row flex-wrap">
              <li className="nav-item col-6 col-md-auto"><a className="nav-link active" aria-current="page" href="#">Blogs</a></li>
              <li className="nav-item col-6 col-md-auto"><a className="nav-link active" aria-current="page" href="#">Notes</a></li>
              <li className="nav-item col-6 col-md-auto"><a className="nav-link disabled" href="#" aria-disabled="true">About Me</a></li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Url Encoder</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Nav;
