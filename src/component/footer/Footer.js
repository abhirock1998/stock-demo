import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { Button } from "@material-ui/core";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__options">
        <div className="footer__first">
          <img
            src="https://media.istockphoto.com/vectors/buyers-hands-raising-auction-bid-paddles-with-numbers-of-competitive-vector-id968390674?k=6&m=968390674&s=612x612&w=0&h=4yDp3MD1zgU3JFWwkQvCYydFN4sKekxkfiSOhvimKiM="
            alt=""
          />
          <p>contact@example.com</p>
          <p>+1-541-754-3010</p>
          <div className="footer__firstSocial">
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
        <div className="footer__second">
          <h5>Useful Links</h5>
          <a href="/link">
            <ArrowRightIcon />
            Mobile Phone
          </a>
          <a href="/link">
            <ArrowRightIcon />
            Laptop
          </a>
          <a href="/link">
            <ArrowRightIcon />
            Headphones
          </a>
        </div>
        <div className="footer__second">
          <h5>Our Policy</h5>
          <a href="/link">
            <ArrowRightIcon />
            Homepage
          </a>
          <a href="/link">
            <ArrowRightIcon />
            Blog
          </a>
          <a href="/link">
            <ArrowRightIcon />
            Services
          </a>
        </div>
        <div className="footer__second">
          <h5>Subscribe to our Newsletter</h5>
          <div className="footer__search">
            <input placeholder="Email" />
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
