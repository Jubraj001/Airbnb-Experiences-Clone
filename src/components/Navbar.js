import react from "react"
import airbnb_logo from "../image/airbnb-logo.png"
export default function Navbar(){
    return(
        <nav>
            <img src={airbnb_logo} className="nav--logo"/>
        </nav>
    )
}