import React from "react";

function Nav(){
    return(

        <div className="navbar-fixed nav-wrapper">
            <nav className= "navbar brown darken-3">
                <a href="/" className="brand-logo right">Laeke Mariam Demessie</a>
                {/* TODO- add sidenav w/jquery included */}
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="left hide-on-med-and-down">
                    <li className= "search">
                        <a href="/about">About</a>
                    </li>
                    <li className= "score">
                        <a href="/">Articles</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;