import React from "react";
export function Navmenu({}) {
  return <div className="navB">
          <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container"><a className="navbar-brand logo" href="#">FOODIMA</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item" role="presentation"><a className="nav-link active" href="#">Shop</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#">Feature</a></li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#">Hotline</a></li>
                  <li className="dropdown nav-item"><a className="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">Recipe</a>
                    <div className="dropdown-menu" role="menu"><a className="dropdown-item" role="presentation" href="#">First Item</a><a className="dropdown-item" role="presentation" href="#">Second Item</a><a className="dropdown-item" role="presentation" href="#">Third Item</a></div>
                  </li>
                  <li className="nav-item" role="presentation"><a className="nav-link" href="#"><i className="fas fa-search" style={{
                  fontSize: '20px'
                }} /></a></li>
                </ul><span className="navbar-text actions"><a className="btn btn-dark invertedBtn" role="button" href="#">0</a> <a className="login" href="#">Log In</a><a className="btn invertedBtn" role="button" href="#">Sign Up</a></span></div>
            </div>
          </nav>
        </div>;
}
  