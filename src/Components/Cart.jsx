import React from "react";
import { useCart } from "react-use-cart";
import ama from "../image/Amazon_logo.svg (1).png"
import cart from "../image/shopping-cart-logo-icon-shopping-cart-removebg-preview.png"
import stars from "../image/wired-outline-237-star-rating-morph.gif"
import { Footer } from "./Footer";

function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =useCart();

    if(isEmpty) return(<div className="else"> <img src={ama} alt="" /><br /> <p >  YOUR CART IS EMPTY</p> </div>)
    

  return (
    <>
    <div className="cart">
      <div className="container">
        <div className="cart-head">

        <div className="amazon-cart">
          <img src={ama} alt="" />
        </div>

        <div className="cart-img">
        <img src={cart} alt="" />
        </div>

        </div>
        <div className="total">
        <h1>TOTAL ITEM : {totalUniqueItems}</h1>
          </div>

      
      {items.map((item) => {
        return (
          <>
          
            <div className="cart-item" >
              

              <div className="cart-photo">
                <img src={item.image} alt="" />
              </div>

              
              <div className="cart-item-in">
              <div className="cart-title">{item.title}</div>

              <div className="cart-price">
                <h4>
                  Rating : {item.rating.rate}{" "}
                  <span>
                    <img src={stars} className="stars"  />
                              <img src={stars} className="stars" />
                              <img src={stars} className="stars" />
                              <img src={stars} className="stars" />
                              <img src={stars} className="stars" />
                  </span>
                </h4>
                <h4> Count : {item.rating.count}</h4>

                <div className="cart-money">
                  <h4>
                    Price : <sup>$</sup> {item.price}
                  </h4>
                </div>
                
                <div className="remove-button">
                <button className="buy">Add To Whislist</button>
                <button className="remove" onClick={() => removeItem(item.id)} >Remove</button>
                </div>
                </div>


                
              </div>
            </div>
          </>
        );
      })}


      </div>

</div>
<div className="Foot">
<Footer/>
</div>
    </>
  );
}

export { Cart };
