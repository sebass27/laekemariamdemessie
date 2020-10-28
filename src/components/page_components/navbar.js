import React from "react";


function Nav(){
    // this is materialize way of shrinking nav items into a sandwich icon in smaller screens
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        // var instances = M.Sidenav.init(elems, options);
    });
    return(

        <div className="navbar-fixed nav-wrapper">
            <nav className= "navbar brown">
                <a href="/" className="brand-logo right">Laeke Mariam Demessie</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="left hide-on-med-and-down">
                    <li><a href="/about">About</a></li>
                    <li><a href="/">Articles</a></li>
                    <li><a href="/media">Media</a></li>
                    <li><a href="/book">Book</a></li>
                </ul>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="/about">About</a></li>
                <li><a href="/">Articles</a></li>
                <li><a href="/media">Media</a></li>
                <li><a href="/book">Book</a></li>
            </ul>
        </div>
    )
}

export default Nav;