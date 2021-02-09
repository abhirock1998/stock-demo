import React from 'react'
import "./home-drop.css";
import {HomeDrop as Drop} from "../../helper/home"
function HomeDrop() {
    return (
        <div className="homeDrop animate__animated  animate__slideInLeft ">
            {Drop.map(link => <a  key={link.heading}  href={`/${link.heading}`}>{link.heading}</a>)}
        </div>
    )
}

export default HomeDrop
