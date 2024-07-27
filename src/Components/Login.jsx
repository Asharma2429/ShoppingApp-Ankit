import React, { useState } from "react";
import shop from "../image/Amazon_logo.svg (1).png"
import { useNavigate } from "react-router-dom";


function Login()
{

    let nav=useNavigate();

    let [email,setemail]=useState('');

    const update=(e)=>
    {
        setemail(e.target.value)
    }

    let [pass,setpass]=useState('');

    const update2=(e)=>
    {
        setpass(e.target.value)
    }

let check=()=>
{
    if(email=="ankitpapa@gmail.com" && pass==123)
    {
    nav("/home")
    }
    else if(email==0 && pass==0){
        alert("Enter your E-mail & Password")
    }
    else if(email==0 && pass==123)
    {
        alert("Enter your email")
    }
    else if(email=="ankitpapa@gmail.com" && pass==0)
    {
        alert("Enter your Password")
    }
    else if(email!="ankitpapa@gmail.com" && pass==123)
    {
        alert("Check your E-mail")
    }
    else if(email=="ankitpapa@gmail.com" && pass!=123)
    {
        alert("Check your Password")
    }
    else
    {
        alert("Enter correct details")
    }
}





    return(
        <>

<div className="login" id="login">
    <div className="container">
        <div className="login-in">
       <div className="img">
        <img src={shop} alt="shop"/>

       </div>
       <div className="box">
        <div className="box-in">

        
        <h1>Sign in</h1>

        
        Email or mobile phone number<input type="email" onChange={update} />
        Password <input type="password" onChange={update2} />


        <a href="https://www.google.com/search?q=amazon+log+in+page&rlz=1C1RXQR_enIN1011IN1011&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjD6tSB6pn_AhVGVPUHHdFXDo0Q_AUoAnoECAEQBA&biw=1536&bih=714&dpr=1.25#imgrc=2_GIBEHf5Uj2YM">Forgot password ?</a>
        
        <button onClick={check}>Sign in</button>


        <div className="new">
      <p>------------- New to Amazon ?------------</p>
        </div>

        <div className="create">
<button>Create an account</button>
        </div>

        </div>
       </div>
        </div>

    </div>

</div>
        
        </>
    )
}
export{Login}