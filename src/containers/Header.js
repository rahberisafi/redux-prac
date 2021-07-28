import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";

const Header = () => {
  const { totalQuantities } = useSelector(state => state.CartReducer);

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>FakeShop</h2>
        <div className="right menu">
        <Link to="/cart">
          <div className="basket">
            <BsFillBagFill className="cart-icon" />
            <span>{totalQuantities}</span>
          </div>
        </Link>

  </div>
      </div>


  
    </div>
  );
};

export default Header;
