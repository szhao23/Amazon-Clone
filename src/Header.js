import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  // first parameter gives us the state of the datalayer
  // second parameter dispatch is like a gun, change the datalayer,
  // shoot the add to basket action at the datalayer with an 'item' and push it in
  // Same thing with removing an 'item' from the datalayer, shoots the remove from basket action at the datalayer
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search Box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Welcome</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 2nd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns Orders</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        {/* 3rd Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* 4th Link Basket/Cart Icon*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in the basket */}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
