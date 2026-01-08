import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = () => {
    axios.post("http://localhost:8000/neworder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    GeneralContext.closeBuyWindow();
  };
  //   const handleSellClick = () => { 
  //   // Check if stock is available in holdings before selling
  //   const holdings = GeneralContext.getHoldings(uid);
  //   const holdingQty = holdings ? holdings[uid] || 0 : 0;
  //   if (holdingQty < stockQuantity) {
  //     alert("Insufficient holdings to sell.");
  //     return;
  //   }
  //   axios.post("http://localhost:8000/neworder", {
  //     name: uid,
  //     qty: stockQuantity,
  //     price: stockPrice,
  //     mode: "SELL",
  //   });

  //   GeneralContext.closeBuyWindow();
  // }

  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
           {/* <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link> */}
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
