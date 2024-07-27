import React, { useState } from "react";
import image1 from "../image/slider 1.jpg"
import image2 from "../image/slider 2.jpg"
import image3 from "../image/slider 3.jpg"
import image4 from "../image/slider 4.webp"
import image5 from "../image/slider 5.webp"



function Slider(){

   const images=[image2,image1,image3,image4,image5]
   const[update,setupdate] =useState(0);

   const nextbtn=()=>{
    if(update<4){
        setupdate(update+1)
    }
   }
   const backbtn=()=>{
    if(update>0){
        setupdate(update-1)
    }
   }
    return(
        <>
        <div className="slider">
            <div className="image">
                {images.map((img,i)=>{
                    return (
                        <img src={img}  className={i==update?"active":"d-none"}/>
                    
                    )
                })}
            

            </div>
            <div className="btn">
                <button className="nxt" onClick={nextbtn}><i class="fa-solid fa-arrow-right"></i></button>
                <button className="back" onClick={backbtn}><i class="fa-solid fa-arrow-left"></i></button>
            </div>
        </div>

        </>
    )
}

export{Slider}