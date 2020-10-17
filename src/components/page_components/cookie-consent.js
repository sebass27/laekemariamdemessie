
import React, { Component } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

class Consent extends Component {
    render(){
        return (

            <CookieConsent
                location="bottom"
                buttonStyle= {{ color: "#4e503b", fontSize: "13px" }}
                style= {{ background: "#2B373B" }} 
                expires={150}
            > 
                
            This website uses cookies to enhance the user experience.
            </CookieConsent>
        )
    }
    
}

export default Consent;