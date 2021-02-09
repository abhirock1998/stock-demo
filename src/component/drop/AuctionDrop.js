import React from "react";
import "./auction-drop.css";
import AppsIcon from '@material-ui/icons/Apps';
import TuneIcon from '@material-ui/icons/Tune';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LinkIcon from '@material-ui/icons/Link';
import ShopIcon from '@material-ui/icons/Shop';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PaymentIcon from '@material-ui/icons/Payment';
function AuctionDrop() {
  return (
    <div className="auctionDrop animate__animated  animate__slideInLeft">
      <a href="/#">Sale Banners</a>
      <a href="/#"> <AppsIcon/>Categories Grid</a>

      <a href="/#"><TuneIcon/>Clients Slider</a>

      <a href="/#"><CalendarTodayIcon/>Pricing Tables</a>

      <a href="/#"><ShopIcon/>Shop Features</a>

      <a href="/#"> <ShoppingCartIcon/>Best Selling</a>

      <a href="/#"><StarBorderIcon/>Featured</a>

      <a href="/#"> By Category</a>

      <a href="/#"><WatchLaterIcon/>Recent Added</a>

      <a href="/#"><FlashOnIcon/> Sales Now</a>

      <a href="/#"><ShopIcon/>Main Shop</a>

      <a href="/#"><LinkIcon/>Single Product</a>
      <a href="/#"><AccountBoxIcon/> My Account</a>

      <a href="/#"><ShopIcon/> My Basket</a>

      <a href="/#"><PaymentIcon/>Checkout</a>
    </div>
  );
}

export default AuctionDrop;
