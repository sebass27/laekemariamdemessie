import React from "react";

function Nav(){
    return(

        <div className="navbar-fixed">
            <nav className= "navbar">
                <ul>
                    <li className= "brand">
                        <a href="/" >Laeke Mariam Demessie</a>
                    </li>
                    <li className= "search">
                        <a href="/about">About</a>
                    </li>
                    <li className= "score">
                        <a href="/articles">Articles</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;