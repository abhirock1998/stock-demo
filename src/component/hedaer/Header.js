import React from 'react'
import "./header.css";
import {Button} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <div className="header" >
            <div className="header__logo">
                <img src="https://media.istockphoto.com/vectors/buyers-hands-raising-auction-bid-paddles-with-numbers-of-competitive-vector-id968390674?k=6&m=968390674&s=612x612&w=0&h=4yDp3MD1zgU3JFWwkQvCYydFN4sKekxkfiSOhvimKiM=" alt="logo"/>
           <h1>Auction</h1> </div>
            <div className="header__center">
                <input type="text" placeholder="Search products" />
                <Button><SearchIcon/></Button>
            </div>
            <div className="header__option">
                <div className="header__optionCart">
                    <h1>My Cart</h1>
                    <p><small>0 items - $0.00</small></p>
                </div>
                <ShoppingBasketIcon/>
            </div>
        </div>
    )
}

export default Header
