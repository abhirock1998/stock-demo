import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./header-bottom.css";
import {
  HomeDropDown,
  BlogDropDown,
  MediaDrop,
  AuctionDrop,
} from "../drop/index";
function HeaderBottom() {
  useEffect(() => {
    document.addEventListener("loadedmetadata",e => console.log(e))
    let btns = document.querySelectorAll("headerBottomCategories__drop");
    console.log(btns.length)
    btns?.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        alert("dgasdsjhgh")
        btn.classList.add("headerBottomCategories__drop--active");
      });
    });
  }, []);

  return (
    <div className="headerBottom">
      <div className="headerBottomCategories">
        <div className="headerBottomCategories__drop    headerBottomCategories__drop--active">
          <MenuIcon fontSize="small" />
          Categories
        </div>
        <div className="headerBottomCategories__drop">
          Home
          <div className="headerBottomCategories__show">
            <HomeDropDown />
          </div>
        </div>
        <div className="headerBottomCategories__drop">
          Auction
          <div className="headerBottomCategories__show">
            <AuctionDrop />
          </div>
        </div>
        <div className="headerBottomCategories__drop">Vendors</div>
        <div className="headerBottomCategories__drop">Shortcodes</div>
        <div className="headerBottomCategories__drop">
          Blog
          <div className="headerBottomCategories__show">
            <BlogDropDown />
          </div>
        </div>
        <div className="headerBottomCategories__drop">
          Media
          <div className="headerBottomCategories__show">
            <MediaDrop />
          </div>
        </div>
        <div className="headerBottomCategories__drop">About</div>
        <div className="headerBottomCategories__drop">Contact</div>
        <div className="headerBottomCategories__drop">Pages</div>
      </div>
      <Button variant="outlined">Sign In</Button>
    </div>
  );
}

export default HeaderBottom;
