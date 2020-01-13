import React from "react";

function Nav(){
    return(

        <div className="navbar-fixed">
            <nav className= "navbar brown darken-3">
                <ul>
                    <li className= "brand">
                        <a href="/" ><strong>Laeke Mariam Demessie</strong></a>
                    </li>
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