import React, { useEffect, useState } from "react";
import star from "../image/wired-outline-237-star-rating-morph.gif";
import image from "../image/wired-outline-332-loader-3.gif"
import { useCart } from "react-use-cart";

function Api() {

  const {addItem}=useCart()
  let [dataa, setdataa] = useState([]);
  const [update,setupdate]=useState([]);

  useEffect(() => {
    Fill();
  }, []);

const click=()=>
{
alert("ITEM ADDED TO CART")
}

  const Fill = async () => {
    const reserve = await fetch("https://fakestoreapi.com/products");
    const data = await reserve.json();
    setdataa(data);
    setupdate(data);
  
  };
  function filter(e)
  {
    const filterdata=dataa.filter(dataa=>dataa.category==e)
    setupdate(filterdata)
  }

 

  return (
    <>
      <div className="items">
        <div className="container">

          <div className="heading" id="heading">
            <h1>Products</h1>
          </div>

          <div className="buttons" id="buttons">
              <button onClick={()=>setupdate(dataa)}>All</button>
              <button onClick={()=>filter("women's clothing")}>Women's</button>
              <button onClick={()=>filter("men's clothing")}>Men's</button>
              <button onClick={()=>filter("jewelery")}>Jewellery</button>
              <button onClick={()=>filter("electronics")}>Electronics</button>
            </div>
            
          <div className="products">

           

            {dataa.length > 0 ? (
              <>
                {update.map((item) => {
                  return (
                    <>
                      <div className="item-1" id="item-1" >
                        <div className="title">{item.title}</div>

                        <div className="photo">
                          <img src={item.image} alt="" />
                        </div>

                        <div className="discription">{item.description}</div>

                        <div className="price">
                          <h4>
                            Rating : {item.rating.rate}
                            <span>
                              <img src={star} className="stars"  />
                              <img src={star} className="stars" />
                              <img src={star} className="stars" />
                              <img src={star} className="stars" />
                              <img src={star} className="stars" />
                            </span>
                          </h4>
                          <h4> Count : {item.rating.count}</h4>
                          
                          <div className="money">
                          <h4>Price : <sup>$</sup> {item.price}</h4>
                          </div>
                          <button className="cart-btn" onClick={() =>{ addItem(item) ; click() } } >Add To Cart</button>
                          <button className="wishlist">Add to wishlist</button>

                        </div>

                      </div>
                    </>
                  );
                })}
              </>
            ) : 
            <>
            <div className="load">
              <img src={image} alt="image" className="loadimg" />
            </div>

            </>

            }
          </div>
        </div>
      </div>
    </>
  );
}
export {Api};
