import React from 'react'
import "./subscribe.css";
import SearchIcon from '@material-ui/icons/Search';
function Subscribed() {
    return (
        <div  className="subscribe">
            <div className="subscribe__title">Browse through our products library !</div>
       <div className="subscribe__form">
           <input type="text" placeholder="Email" />
        <SearchIcon/>
       </div>
        </div>
    )
}

export default Subscribed
